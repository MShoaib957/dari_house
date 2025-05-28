"use client"
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useCart } from "@/contexts/CartContext";

export const Cart: React.FC = () => {
  const { state, closeCart, removeItem, updateQuantity, totalItems, subtotal } =
    useCart();
  const { items, isOpen } = state;

  if (!isOpen) return null;

  // comment it otut
  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={closeCart}
      />
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="relative w-screen max-w-md">
          <div className="h-full flex flex-col bg-white shadow-xl overflow-y-auto">
            {/* Header */}
            <div className="px-4 sm:px-6 py-4 bg-amber-800 text-white">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium">Your Cart</h2>
                <button
                  onClick={closeCart}
                  className="text-white hover:text-amber-200 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="mt-1 flex items-center">
                <ShoppingBag size={16} className="mr-2" />
                <span>
                  {totalItems} {totalItems === 1 ? "item" : "items"}
                </span>
              </div>
            </div>

            {/* Empty State */}
            {items.length === 0 && (
              <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6">
                <ShoppingBag size={64} className="text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-900">
                  Your cart is empty
                </h3>
                <p className="mt-1 text-gray-500">
                  Start shopping to add items to your cart
                </p>
                <div className="mt-6">
                  <Button onClick={closeCart}>Continue Shopping</Button>
                </div>
              </div>
            )}

            {/* Cart Items */}
            {items.length > 0 && (
              <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                <ul className="divide-y divide-gray-200">
                  {items.map((item) => (
                    <li key={item.product.id} className="py-6 flex">
                      {/* Product Image */}
                      <div className="flex-shrink-0 w-24 h-24 rounded-md overflow-hidden">
                        <img
                          src={item.product.imageUrl}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="ml-4 flex-1 flex flex-col">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="text-sm font-medium text-gray-900">
                              <Link
                                to={`/product/${item.product.id}`}
                                onClick={closeCart}
                              >
                                {item.product.name}
                              </Link>
                            </h3>
                            <p className="ml-4 text-sm font-medium text-gray-900">
                              ${(item.product.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {item.product.material} | {item.product.color}
                          </p>
                        </div>

                        {/* Quantity and Remove */}
                        <div className="flex-1 flex items-end justify-between">
                          <div className="flex items-center border border-gray-300 rounded">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.quantity - 1
                                )
                              }
                              className="p-1 text-gray-500 hover:text-gray-700"
                              disabled={item.quantity <= 1}
                            >
                              <Minus size={16} />
                            </button>
                            <span className="px-2 text-gray-900 w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.quantity + 1
                                )
                              }
                              className="p-1 text-gray-500 hover:text-gray-700"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="text-red-500 hover:text-red-700 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                  <p>Subtotal</p>
                  <p>${subtotal.toFixed(2)}</p>
                </div>
                <p className="text-sm text-gray-500 mb-6">
                  Shipping and taxes calculated at checkout.
                </p>
                <Link
                  to="/checkout"
                  onClick={closeCart}
                  className="block w-full bg-amber-800 text-white py-3 px-4 rounded-md text-center font-medium hover:bg-amber-900 transition-colors"
                >
                  Checkout
                </Link>
                <div className="mt-4">
                  <button
                    onClick={closeCart}
                    className="text-sm text-amber-800 hover:text-amber-900 flex items-center justify-center w-full"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
