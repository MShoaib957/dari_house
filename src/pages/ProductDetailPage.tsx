"use client"
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById, getRelatedProducts } from "../data/products";
import { useCart } from "../contexts/CartContext";
import {
  Star,
  Minus,
  Plus,
  ChevronRight,
  Check,
  ShoppingBag,
  Container,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/Products/ProductGrid";
import { Badge } from "@/components/ui/badge";

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const product = getProductById(id || "");

  if (!product) {
    return (
      <Container className="py-32 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Product Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <Button onClick={() => navigate("/products")}>Back to Products</Button>
      </Container>
    );
  }

  const relatedProducts = getRelatedProducts(product.id);

  // Create an array of all images (main image + gallery)
  const allImages = [product.imageUrl, ...product.gallery];

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="pt-24 pb-16">
      <Container>
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center text-sm">
            <li>
              <a href="/" className="text-gray-500 hover:text-amber-800">
                Home
              </a>
            </li>
            <ChevronRight size={14} className="mx-2 text-gray-400" />
            <li>
              <a
                href="/products"
                className="text-gray-500 hover:text-amber-800"
              >
                Products
              </a>
            </li>
            <ChevronRight size={14} className="mx-2 text-gray-400" />
            <li>
              <a
                href={`/category/${product.category}`}
                className="text-gray-500 hover:text-amber-800 capitalize"
              >
                {product.category}
              </a>
            </li>
            <ChevronRight size={14} className="mx-2 text-gray-400" />
            <li className="text-gray-900 font-medium truncate max-w-[200px]">
              {product.name}
            </li>
          </ol>
        </nav>

        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Product Images */}
          <div>
            <div className="aspect-square overflow-hidden rounded-lg mb-4">
              <img
                src={allImages[activeImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {allImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`aspect-square rounded-md overflow-hidden border-2 ${
                    activeImageIndex === index
                      ? "border-amber-800"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            {/* Product Status Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {product.isNew && <Badge variant="primary">New</Badge>}
              {!product.inStock && <Badge variant="error">Out of Stock</Badge>}
              <Badge variant="secondary" className="capitalize">
                {product.category}
              </Badge>
            </div>

            {/* Product Title and Ratings */}
            <h1 className="text-3xl font-serif font-semibold text-gray-900 mb-2">
              {product.name}
            </h1>

            <div className="flex items-center mb-4">
              <div className="flex items-center mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${
                      i < Math.floor(product.rating)
                        ? "text-amber-400 fill-amber-400"
                        : "text-gray-300"
                    } mr-1`}
                  />
                ))}
              </div>
              <span className="text-gray-600 text-sm">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <span className="text-2xl font-semibold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-gray-600 ml-2">
                per sq ft / ${(product.price * 100).toFixed(2)} per box
              </span>
            </div>

            {/* Specifications */}
            <div className="mb-6 grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600 text-sm">Material</p>
                <p className="font-medium capitalize">{product.material}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Color</p>
                <p className="font-medium capitalize">{product.color}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Dimensions</p>
                <p className="font-medium">{product.dimensions}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Coverage</p>
                <p className="font-medium">{product.coverage}</p>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="flex items-center border border-gray-300 rounded-md mr-4">
                  <button
                    onClick={decreaseQuantity}
                    className="px-2 py-1 text-gray-600 hover:text-gray-900 disabled:opacity-50"
                    disabled={quantity <= 1}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4 py-1 text-gray-900 font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={increaseQuantity}
                    className="px-2 py-1 text-gray-600 hover:text-gray-900"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <Button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  size="lg"
                  icon={<ShoppingBag size={18} />}
                >
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
              </div>

              {/* Availability */}
              <div className="flex items-center text-sm">
                <div
                  className={`w-3 h-3 rounded-full mr-2 ${
                    product.inStock ? "bg-green-500" : "bg-red-500"
                  }`}
                ></div>
                <span>{product.inStock ? "In Stock" : "Out of Stock"}</span>

                {product.inStock && (
                  <span className="ml-6 flex items-center text-green-600">
                    <Check size={16} className="mr-1" />
                    Free shipping over $999
                  </span>
                )}
              </div>
            </div>

            {/* Tabs */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setActiveTab("description")}
                  className={`pb-2 px-4 text-sm font-medium ${
                    activeTab === "description"
                      ? "text-amber-800 border-b-2 border-amber-800"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab("features")}
                  className={`pb-2 px-4 text-sm font-medium ${
                    activeTab === "features"
                      ? "text-amber-800 border-b-2 border-amber-800"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Features
                </button>
                <button
                  onClick={() => setActiveTab("installation")}
                  className={`pb-2 px-4 text-sm font-medium ${
                    activeTab === "installation"
                      ? "text-amber-800 border-b-2 border-amber-800"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Installation
                </button>
              </div>

              <div className="py-4">
                {activeTab === "description" && (
                  <p className="text-gray-700">{product.description}</p>
                )}

                {activeTab === "features" && (
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check
                          size={16}
                          className="text-green-500 mt-1 mr-2 flex-shrink-0"
                        />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {activeTab === "installation" && (
                  <div className="text-gray-700">
                    <p className="mb-4">
                      For proper installation of {product.name}, please follow
                      these guidelines:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        Acclimate the flooring in the installation room for at
                        least 48 hours.
                      </li>
                      <li>
                        Ensure the subfloor is clean, dry, and level before
                        installation.
                      </li>
                      <li>
                        Use appropriate underlayment based on the installation
                        location.
                      </li>
                      <li>
                        Allow for expansion gaps around the perimeter of the
                        room.
                      </li>
                      <li>
                        Follow manufacturer's specific installation instructions
                        included with the product.
                      </li>
                    </ul>
                    <p className="mt-4">
                      We recommend professional installation for the best
                      results and to maintain warranty coverage.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
              You Might Also Like
            </h2>
            <ProductGrid products={relatedProducts} />
          </div>
        )}
      </Container>
    </div>
  );
};
