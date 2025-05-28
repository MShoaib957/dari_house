"use client"
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCategoryBySlug } from "../data/categories";
import { products, filterProducts } from "../data/products";
import { FilterOptions } from "@/types";
import { Container } from "lucide-react";
import { ProductGrid } from "@/components/Products/ProductGrid";

export const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = getCategoryBySlug(slug || "");

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (category) {
      const filters: Partial<FilterOptions> = {
        category: [category.slug],
      };

      setFilteredProducts(filterProducts(filters));
    }
  }, [category]);

  if (!category) {
    return (
      <Container className="py-32 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Category Not Found
        </h2>
        <p className="text-gray-600">
          The category you're looking for doesn't exist.
        </p>
      </Container>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <Container>
        {/* Category Header */}
        <div className="relative mb-12 overflow-hidden rounded-lg">
          <img
            src={category.imageUrl}
            alt={category.name}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
            <div className="px-8">
              <h1 className="text-3xl font-serif font-semibold text-white mb-2">
                {category.name} Flooring
              </h1>
              <p className="text-gray-200 max-w-md">{category.description}</p>
            </div>
          </div>
        </div>

        {/* Products */}
        <ProductGrid
          products={filteredProducts}
          title={`${category.name} Products`}
          subtitle={`Explore our collection of premium ${category.name.toLowerCase()} flooring options`}
        />
      </Container>
    </div>
  );
};
