import React from "react";
import { Truck, ShieldCheck, RefreshCw, HeartHandshake } from "lucide-react";
import { Container } from "../ui/Container";

export const InfoSection: React.FC = () => {
  const features = [
    {
      icon: <Truck size={24} className="text-amber-800" />,
      title: "Free Shipping",
      description:
        "Free shipping on orders over $999. Delivery within 5-7 business days.",
    },
    {
      icon: <ShieldCheck size={24} className="text-amber-800" />,
      title: "Quality Guarantee",
      description:
        "All products come with a manufacturer's warranty and our quality promise.",
    },
    {
      icon: <RefreshCw size={24} className="text-amber-800" />,
      title: "Easy Returns",
      description:
        "30-day return policy on unopened products. Hassle-free process.",
    },
    {
      icon: <HeartHandshake size={24} className="text-amber-800" />,
      title: "Expert Support",
      description:
        "Our flooring experts are available to help you make the right choice.",
    },
  ];

  return (
    <section className="py-12 border-t border-gray-200">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 bg-amber-100 p-3 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
