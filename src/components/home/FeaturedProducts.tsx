import { Product } from "@/types";
import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import { ProductGrid } from "../Products/ProductGrid";
import { Button } from "../ui/button";

interface FeaturedProductsProps {
  products: Product[];
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  products,
}) => {
  return (
    <section className="py-16">
      <Container>
        <ProductGrid
          products={products}
          title="Featured Products"
          subtitle="Our handpicked selection of premium flooring options"
        />

        <div className="mt-12 text-center">
          <Link to="/products">
            <Button variant="outline">View All Products</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};
