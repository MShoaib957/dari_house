"use client"
import { Cart } from "@/components/cart/Cart";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CartProvider } from "@/contexts/CartContext";
import { CategoryPage } from "@/pages/CategoryPage";
import { HomePage } from "@/pages/HomePage";
import { ProductDetailPage } from "@/pages/ProductDetailPage";
import { ProductsPage } from "@/pages/ProductsPage";
import React from "react"; import
{ BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/category/:slug" element={<CategoryPage />} />
              {/* Additional routes could be added here */}
              <Route
                path="*"
                element={
                  <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                      <h2 className="text-2xl font-semibold mb-4">
                        Page Not Found
                      </h2>
                      <p className="mb-6">
                        The page you're looking for doesn't exist or has been
                        moved.
                      </p>
                    </div>
                  </div>
                }
              />
            </Routes>
          </main>
          <Footer />
          <Cart />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
