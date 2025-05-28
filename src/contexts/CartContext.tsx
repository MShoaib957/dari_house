"use client"

import { CartItem, Product } from "@/types";
import React, { useContext, useReducer, useEffect, createContext } from "react";


interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type CartAction =
  | { type: "ADD_ITEM"; payload: { product: Product; quantity: number } }
  | { type: "REMOVE_ITEM"; payload: { productId: string } }
  | {
      type: "UPDATE_QUANTITY";
      payload: { productId: string; quantity: number };
    }
  | { type: "CLEAR_CART" }
  | { type: "TOGGLE_CART" }
  | { type: "CLOSE_CART" };

interface CartContextType {
  state: CartState;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  closeCart: () => void;
  totalItems: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const { product, quantity } = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.product.id === product.id
      );

      if (existingItemIndex >= 0) {
        // Update existing item
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity,
        };
        return { ...state, items: updatedItems, isOpen: true };
      } else {
        // Add new item
        return {
          ...state,
          items: [...state.items, { product, quantity }],
          isOpen: true,
        };
      }
    }
    case "REMOVE_ITEM": {
      return {
        ...state,
        items: state.items.filter(
          (item) => item.product.id !== action.payload.productId
        ),
      };
    }
    case "UPDATE_QUANTITY": {
      const { productId, quantity } = action.payload;
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((item) => item.product.id !== productId),
        };
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.product.id === productId ? { ...item, quantity } : item
        ),
      };
    }
    case "CLEAR_CART": {
      return { ...state, items: [] };
    }
    case "TOGGLE_CART": {
      return { ...state, isOpen: !state.isOpen };
    }
    case "CLOSE_CART": {
      return { ...state, isOpen: false };
    }
    default:
      return state;
  }
};

const loadCartFromStorage = (): CartItem[] => {
  if (typeof window === "undefined") return [];

  try {
    const storedCart = localStorage.getItem("floorDariCart");
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error("Failed to load cart from localStorage:", error);
    return [];
  }
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: loadCartFromStorage(),
    isOpen: false,
  });

  useEffect(() => {
    localStorage.setItem("floorDariCart", JSON.stringify(state.items));
  }, [state.items]);

  const addItem = (product: Product, quantity = 1) => {
    dispatch({ type: "ADD_ITEM", payload: { product, quantity } });
  };

  const removeItem = (productId: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: { productId } });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const toggleCart = () => {
    dispatch({ type: "TOGGLE_CART" });
  };

  const closeCart = () => {
    dispatch({ type: "CLOSE_CART" });
  };

  const totalItems = state.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = state.items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        state,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        toggleCart,
        closeCart,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
