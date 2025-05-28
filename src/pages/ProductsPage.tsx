"use client"
import React, { useState, useEffect } from "react";
import {
  products,
  getAllCategories,
  getAllMaterials,
  getAllColors,
  getMinMaxPrice,
  filterProducts,
} from "../data/products";
import { ArrowUpDown } from "lucide-react";
import { FilterOptions } from "@/types";
import { Container } from "@/components/ui/Container";
import { Filters } from "@/components/Products/Filters";
import { ProductGrid } from "@/components/Products/ProductGrid";

export const ProductsPage: React.FC = () => {
  const [filters, setFilters] = useState<Partial<FilterOptions>>({});
  const [sortBy, setSortBy] = useState<string>("featured");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const categories = getAllCategories();
  const materials = getAllMaterials();
  const colors = getAllColors();
  const priceRange = getMinMaxPrice();

  useEffect(() => {
    let result = filterProducts(filters);

    // Apply sorting
    switch (sortBy) {
      case "price-asc":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        result = [...result].sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "rating":
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      case "featured":
      default:
        // Keep the default order or apply featured logic
        result = [...result].sort((a, b) => {
          if (a.isFeatured && !b.isFeatured) return -1;
          if (!a.isFeatured && b.isFeatured) return 1;
          return 0;
        });
        break;
    }

    setFilteredProducts(result);
  }, [filters, sortBy]);

  const handleFilterChange = (newFilters: Partial<FilterOptions>) => {
    setFilters(newFilters);
  };

  const clearFilters = () => {
    setFilters({});
  };

  return (
    <div className="pt-20 pb-16">
      <Container>
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-semibold text-gray-900">
            All Products
          </h1>
          <p className="text-gray-600 mt-2">
            Discover our collection of premium flooring solutions.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <Filters
              categories={categories}
              materials={materials}
              colors={colors}
              priceRange={priceRange}
              currentFilters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={clearFilters}
            />
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            {/* Sort Controls */}
            <div className="mb-6 flex justify-between items-center">
              <p className="text-sm text-gray-500">
                Showing {filteredProducts.length} products
              </p>
              <div className="flex items-center">
                <span className="mr-2 text-sm text-gray-700">Sort by:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-8 py-1.5 text-sm focus:outline-none focus:ring-amber-800 focus:border-amber-800"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="name-asc">Name: A to Z</option>
                    <option value="name-desc">Name: Z to A</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <ArrowUpDown size={14} className="text-gray-500" />
                  </div>
                </div>
              </div>
            </div>

            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </Container>
    </div>
  );
};
