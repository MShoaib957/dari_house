import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import { Button } from "../ui/button";

export const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-amber-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
              width="8"
              height="8"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 8 0 L 0 0 0 8"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-amber-100 text-lg mb-8">
            Schedule a free consultation with our flooring experts or request a
            sample to see and feel the quality firsthand.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-amber-800 hover:bg-gray-100 w-full sm:w-auto"
              >
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/samples">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
              >
                Request Samples
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
