import React from "react";
import { Hero } from "../components/home/Hero";
import { CategorySection } from "../components/home/CategorySection";
import { FeaturedProducts } from "../components/home/FeaturedProducts";
import { InfoSection } from "../components/home/InfoSection";
import { CTASection } from "../components/home/CTASection";
import { categories } from "../data/categories";
import { getFeaturedProducts } from "../data/products";
import { Testimonials } from "@/components/home/testimonials";

export const HomePage: React.FC = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      <Hero />
      <CategorySection categories={categories} />
      <FeaturedProducts products={featuredProducts} />
      <InfoSection />
      <Testimonials />
      <CTASection />
    </>
  );
};
