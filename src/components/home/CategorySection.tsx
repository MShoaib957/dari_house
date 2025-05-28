import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { Category } from "@/types";

interface CategorySectionProps {
  categories: Category[];
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  categories,
}) => {
  return (
    <section id="categories" className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-semibold text-gray-900">
            Shop by Category
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Explore our range of premium flooring solutions for every room in
            your home. Find the perfect match for your style and needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Category Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              </div>

              {/* Category Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-medium text-white mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-200 text-sm line-clamp-2 mb-4">
                  {category.description}
                </p>
                <span className="inline-flex items-center text-white text-sm font-medium">
                  Shop Now
                  <ArrowRight
                    size={16}
                    className="ml-2 transform group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
