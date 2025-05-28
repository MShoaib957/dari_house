import React from "react";
import { Star } from "lucide-react";
import { Container } from "../ui/Container";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    content:
      "The oak hardwood flooring we purchased from Floor Dari completely transformed our living room. The quality is exceptional, and the installation team was professional and efficient.",
    rating: 5,
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Interior Designer",
    content:
      "As an interior designer, I've worked with many flooring companies, but Floor Dari stands out for their exceptional selection and customer service. My clients are always thrilled with the results.",
    rating: 5,
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Contractor",
    content:
      "The luxury vinyl planks we installed for a recent bathroom renovation project exceeded our expectations. Waterproof, beautiful, and durable - exactly what we needed.",
    rating: 4,
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-amber-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-semibold text-gray-900">
            Customer Stories
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Read what our customers have to say about their experience with
            Floor Dari.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-sm relative"
            >
              {/* Quote marks */}
              <div className="absolute top-4 right-4 text-amber-200 opacity-50">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${
                      i < testimonial.rating
                        ? "text-amber-400 fill-amber-400"
                        : "text-gray-300"
                    } mr-1`}
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-medium text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
