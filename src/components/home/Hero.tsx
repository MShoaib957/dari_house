import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Luxurious hardwood flooring"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-4 py-32 sm:px-6 lg:px-8 lg:py-56 max-w-screen-xl mx-auto">
        <div className="max-w-xl">
          <h1 className="text-4xl font-serif font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Transform Your Space With Premium Flooring
          </h1>
          <p className="mt-6 text-xl text-gray-100">
            Discover our collection of high-quality, beautiful flooring
            solutions for every room in your home.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link to="/products">
              <Button size="lg" className="text-base">
                Shop Collection
              </Button>
            </Link>
            <Link to="/inspiration">
              <Button
                size="lg"
                variant="outline"
                className="text-base text-white border-white hover:bg-white/10"
              >
                Get Inspired
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <a
          href="#categories"
          className="flex flex-col items-center text-white opacity-80 hover:opacity-100 transition-opacity"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowRight size={20} className="transform rotate-90" />
        </a>
      </div>
    </div>
  );
};
