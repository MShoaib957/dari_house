export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    material: string;
    color: string;
    dimensions: string;
    coverage: string;
    description: string;
    features: string[];
    imageUrl: string;
    gallery: string[];
    rating: number;
    reviews: number;
    inStock: boolean;
    isNew?: boolean;
    isFeatured?: boolean;
    relatedProducts?: string[];
  }
  
  export interface CartItem {
    product: Product;
    quantity: number;
  }
  
  export type Category = {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    slug: string;
  };
  
  export type FilterOptions = {
    category: string[];
    material: string[];
    color: string[];
    priceRange: [number, number];
  };