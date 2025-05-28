import React from "react";
import { ProductCard } from "./ProductCard";
import { Product } from "@/types";

interface ProductGridProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  title,
  subtitle,
}) => {
  return (
    <div>
      {title && (
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-serif font-semibold text-gray-900">
            {title}
          </h2>
          {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
        </div>
      )}

      {products.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No products found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
