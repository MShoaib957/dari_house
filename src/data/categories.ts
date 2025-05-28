import { Category } from "@/types";


export const categories: Category[] = [
  {
    id: "1",
    name: "Hardwood",
    description: "Timeless beauty and durability with natural wood variations",
    imageUrl:
      "https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "hardwood",
  },
  {
    id: "2",
    name: "Tile",
    description:
      "Versatile and long-lasting ceramic, porcelain, and natural stone",
    imageUrl:
      "https://images.pexels.com/photos/5825527/pexels-photo-5825527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "tile",
  },
  {
    id: "3",
    name: "Vinyl",
    description: "Waterproof and durable with authentic wood and stone looks",
    imageUrl:
      "https://images.pexels.com/photos/3934052/pexels-photo-3934052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "vinyl",
  },
  {
    id: "4",
    name: "Carpet",
    description: "Soft comfort and warmth with stain-resistant technology",
    imageUrl:
      "https://images.pexels.com/photos/6580227/pexels-photo-6580227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "carpet",
  },
  {
    id: "5",
    name: "Bamboo",
    description: "Eco-friendly and sustainable with natural beauty",
    imageUrl:
      "https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "bamboo",
  },
  {
    id: "6",
    name: "Laminate",
    description: "Affordable and versatile with realistic wood appearances",
    imageUrl:
      "https://images.pexels.com/photos/6585765/pexels-photo-6585765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "laminate",
  },
  {
    id: "7",
    name: "Cork",
    description: "Natural comfort with sound dampening and insulation",
    imageUrl:
      "https://images.pexels.com/photos/5117913/pexels-photo-5117913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "cork",
  },
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find((category) => category.slug === slug);
};
