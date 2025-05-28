"use client"
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { ShoppingBag, Star } from "lucide-react";
import { Product } from "@/types";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.isNew && <Badge variant="primary">New</Badge>}
          {!product.inStock && <Badge variant="error">Out of Stock</Badge>}
        </div>

        {/* Quick add button */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            icon={<ShoppingBag size={16} />}
            fullWidth
            className="text-sm"
          >
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </Button>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-gray-800 font-medium line-clamp-2 mb-1 group-hover:text-amber-800 transition-colors">
            {product.name}
          </h3>
        </div>

        <div className="flex items-center gap-1 mb-2">
          <Star size={14} className="text-amber-400 fill-amber-400" />
          <span className="text-sm text-gray-700">{product.rating}</span>
          <span className="text-sm text-gray-500">({product.reviews})</span>
        </div>

        <div className="flex flex-wrap gap-1 mb-2">
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {product.material}
          </span>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {product.color}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-sm text-gray-500">{product.coverage}</span>
        </div>
      </div>
    </Link>
  );
};
