"use client"

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { categories } from "../../data/categories";
import { Container } from "../ui/Container";

export const Header: React.FC = () => {
  const { state, toggleCart, totalItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (!searchOpen) {
      setTimeout(() => {
        document.getElementById("search-input")?.focus();
      }, 100);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality or navigation
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
    setSearchOpen(false);
    setSearchQuery("");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-serif font-bold text-amber-800">
              Floor Dari
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/products"
              className="text-gray-700 hover:text-amber-800 font-medium transition-colors"
            >
              All Products
            </Link>
            {/* <div className="relative group">
              <button className="text-gray-700 hover:text-amber-800 font-medium transition-colors flex items-center">
                Categories
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/category/${category.slug}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-800"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div> */}
            {/* <Link
              to="/inspiration"
              className="text-gray-700 hover:text-amber-800 font-medium transition-colors"
            >
              Inspiration
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-amber-800 font-medium transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-amber-800 font-medium transition-colors"
            >
              Contact
            </Link> */}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleSearch}
              className="text-gray-700 hover:text-amber-800 transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <Link
              to="/account"
              className="text-gray-700 hover:text-amber-800 transition-colors"
              aria-label="Account"
            >
              <User size={20} />
            </Link>
            <button
              onClick={toggleCart}
              className="text-gray-700 hover:text-amber-800 transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-700 hover:text-amber-800 transition-colors"
              aria-label="Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </Container>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
          <div className="bg-white w-full max-w-3xl rounded-lg overflow-hidden shadow-xl mx-4">
            <div className="p-4 flex items-center">
              <Search size={20} className="text-gray-500 mr-2" />
              <form onSubmit={handleSearch} className="flex-grow">
                <input
                  id="search-input"
                  type="text"
                  placeholder="Search for products..."
                  className="w-full outline-none text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>
              <button
                onClick={toggleSearch}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-4 border-t border-gray-200">
              <h3 className="font-medium text-gray-700 mb-2">
                Popular Searches
              </h3>
              <div className="flex flex-wrap gap-2">
                <button
                  className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-700"
                  onClick={() => {
                    setSearchQuery("hardwood flooring");
                    document.getElementById("search-input")?.focus();
                  }}
                >
                  hardwood flooring
                </button>
                <button
                  className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-700"
                  onClick={() => {
                    setSearchQuery("waterproof vinyl");
                    document.getElementById("search-input")?.focus();
                  }}
                >
                  waterproof vinyl
                </button>
                <button
                  className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-700"
                  onClick={() => {
                    setSearchQuery("marble tile");
                    document.getElementById("search-input")?.focus();
                  }}
                >
                  marble tile
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="p-4">
            <div className="flex justify-between items-center mb-6">
              <Link
                to="/"
                className="text-2xl font-serif font-bold text-amber-800"
              >
                Floor Dari
              </Link>
              <button onClick={toggleMobileMenu} className="text-gray-700">
                <X size={24} />
              </button>
            </div>
            <nav className="space-y-6">
              <Link
                to="/products"
                className="block text-lg font-medium text-gray-700 hover:text-amber-800"
                onClick={toggleMobileMenu}
              >
                All Products
              </Link>
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">
                  Categories
                </h3>
                <div className="space-y-2 pl-2">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      to={`/category/${category.slug}`}
                      className="block text-gray-600 hover:text-amber-800"
                      onClick={toggleMobileMenu}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                to="/inspiration"
                className="block text-lg font-medium text-gray-700 hover:text-amber-800"
                onClick={toggleMobileMenu}
              >
                Inspiration
              </Link>
              <Link
                to="/about"
                className="block text-lg font-medium text-gray-700 hover:text-amber-800"
                onClick={toggleMobileMenu}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="block text-lg font-medium text-gray-700 hover:text-amber-800"
                onClick={toggleMobileMenu}
              >
                Contact
              </Link>
            </nav>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <Link
                to="/account"
                className="flex items-center text-gray-700 hover:text-amber-800 mb-4"
                onClick={toggleMobileMenu}
              >
                <User size={20} className="mr-2" />
                <span>My Account</span>
              </Link>
              <button
                onClick={() => {
                  toggleMobileMenu();
                  toggleCart();
                }}
                className="flex items-center text-gray-700 hover:text-amber-800"
              >
                <ShoppingBag size={20} className="mr-2" />
                <span>Cart ({totalItems})</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
