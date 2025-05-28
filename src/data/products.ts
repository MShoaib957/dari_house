import { FilterOptions, Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Rustic Oak Hardwood Flooring',
    price: 8.99,
    category: 'hardwood',
    material: 'oak',
    color: 'brown',
    dimensions: '5" x 48"',
    coverage: '23.5 sq ft per box',
    description: 'Premium oak hardwood flooring with a rustic finish that adds warmth and character to any room. Each plank features unique grain patterns and natural color variations.',
    features: [
      'Solid oak construction',
      'Hand-scraped texture',
      'Easy tongue and groove installation',
      'Suitable for underfloor heating',
      '25-year residential warranty'
    ],
    imageUrl: 'https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      'https://images.pexels.com/photos/6480710/pexels-photo-6480710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6480709/pexels-photo-6480709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5490025/pexels-photo-5490025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 4.8,
    reviews: 126,
    inStock: true,
    isFeatured: true,
    relatedProducts: ['2', '4', '7']
  },
  {
    id: '2',
    name: 'Italian Marble Tile',
    price: 12.99,
    category: 'tile',
    material: 'marble',
    color: 'white',
    dimensions: '12" x 12"',
    coverage: '10 sq ft per box',
    description: 'Luxurious Italian Carrara marble tiles featuring elegant grey veining on a pristine white background. These polished tiles add timeless elegance to bathrooms and kitchens.',
    features: [
      'Genuine Italian marble',
      'Polished finish',
      'Frost resistant',
      'Low water absorption',
      'Suitable for walls and floors'
    ],
    imageUrl: 'https://images.pexels.com/photos/5825527/pexels-photo-5825527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      'https://images.pexels.com/photos/5824517/pexels-photo-5824517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4846096/pexels-photo-4846096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6958519/pexels-photo-6958519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 4.9,
    reviews: 84,
    inStock: true,
    isNew: true,
    relatedProducts: ['5', '8', '11']
  },
  {
    id: '3',
    name: 'Waterproof Luxury Vinyl Planks',
    price: 5.49,
    category: 'vinyl',
    material: 'vinyl',
    color: 'gray',
    dimensions: '7" x 48"',
    coverage: '30 sq ft per box',
    description: 'Modern gray luxury vinyl planks with a realistic wood look and 100% waterproof construction. Perfect for bathrooms, kitchens, and basements where moisture resistance is essential.',
    features: [
      '100% waterproof core',
      'Rigid SPC construction',
      'Realistic wood texture',
      'Built-in underlayment',
      'Easy click-lock installation'
    ],
    imageUrl: 'https://images.pexels.com/photos/3934052/pexels-photo-3934052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      'https://images.pexels.com/photos/3934061/pexels-photo-3934061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6492402/pexels-photo-6492402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6489107/pexels-photo-6489107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 4.7,
    reviews: 203,
    inStock: true,
    isFeatured: true,
    relatedProducts: ['6', '9', '12']
  },
  {
    id: '4',
    name: 'Bamboo Engineered Flooring',
    price: 7.25,
    category: 'bamboo',
    material: 'bamboo',
    color: 'natural',
    dimensions: '5.9" x 72.8"',
    coverage: '21.5 sq ft per box',
    description: 'Eco-friendly strand-woven bamboo flooring that combines sustainability with durability. This natural finish showcases the unique grain patterns of bamboo.',
    features: [
      'Eco-friendly and sustainable',
      'Harder than traditional hardwoods',
      'UV-cured finish for durability',
      'Low VOC emissions',
      'Suitable for high-traffic areas'
    ],
    imageUrl: 'https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      'https://images.pexels.com/photos/5997967/pexels-photo-5997967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6444352/pexels-photo-6444352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6444271/pexels-photo-6444271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 4.6,
    reviews: 89,
    inStock: true,
    relatedProducts: ['1', '7', '10']
  },
  {
    id: '5',
    name: 'Porcelain Wood-Look Tile',
    price: 6.75,
    category: 'tile',
    material: 'porcelain',
    color: 'chestnut',
    dimensions: '8" x 48"',
    coverage: '15.8 sq ft per box',
    description: 'Wood-look porcelain tiles that combine the beauty of hardwood with the durability of ceramic. These chestnut-colored tiles are perfect for high-moisture areas where real wood isn\'t practical.',
    features: [
      'Realistic wood grain texture',
      'Frost and moisture resistant',
      'Suitable for radiant heating',
      'Scratch and stain resistant',
      'PEI Rating: 4 (high traffic areas)'
    ],
    imageUrl: 'https://images.pexels.com/photos/6508962/pexels-photo-6508962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      'https://images.pexels.com/photos/6508932/pexels-photo-6508932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6508983/pexels-photo-6508983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4503272/pexels-photo-4503272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 4.5,
    reviews: 67,
    inStock: true,
    relatedProducts: ['2', '8', '11']
  },
  {
    id: '6',
    name: 'Soft Plush Carpet',
    price: 4.25,
    category: 'carpet',
    material: 'polyester',
    color: 'beige',
    dimensions: '12\' width',
    coverage: 'Sold by sq ft',
    description: 'Ultra-soft plush carpet that adds warmth and comfort to bedrooms and living spaces. The stain-resistant fibers make this beige carpet both beautiful and practical for family homes.',
    features: [
      'Stain-resistant technology',
      'Hypoallergenic materials',
      'Pet-friendly construction',
      'Sound dampening properties',
      '10-year wear warranty'
    ],
    imageUrl: 'https://images.pexels.com/photos/6580227/pexels-photo-6580227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      'https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6969845/pexels-photo-6969845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6585763/pexels-photo-6585763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 4.4,
    reviews: 112,
    inStock: true,
    relatedProducts: ['3', '9', '12']
  },
  {
    id: '7',
    name: 'Reclaimed Barn Wood Planks',
    price: 11.99,
    category: 'hardwood',
    material: 'reclaimed wood',
    color: 'multi',
    dimensions: 'Variable',
    coverage: '20 sq ft per box',
    description: 'Authentic reclaimed barn wood with decades of character and patina. These one-of-a-kind planks bring history and rustic charm to accent walls and statement floors.',
    features: [
      'Genuine reclaimed wood',
      'Unique patina and character',
      'Naturally distressed finish',
      'Eco-friendly choice',
      'No two planks are alike'
    ],
    imageUrl: 'https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      'https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/7319294/pexels-photo-7319294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 4.9,
    reviews: 48,
    inStock: true,
    isNew: true,
    relatedProducts: ['1', '4', '10']
  },
  {
    id: '8',
    name: 'Geometric Cement Tiles',
    price: 9.50,
    category: 'tile',
    material: 'cement',
    color: 'blue',
    dimensions: '8" x 8"',
    coverage: '5.7 sq ft per box',
    description: 'Handcrafted cement tiles featuring a striking blue geometric pattern. These encaustic tiles create a stunning visual impact for feature walls, backsplashes, and accent floors.',
    features: [
      'Handcrafted artisan quality',
      'Color penetrates through tile',
      'Unique matte finish',
      'Durable and long-lasting',
      'Indoor and outdoor use'
    ],
    imageUrl: 'https://images.pexels.com/photos/4352140/pexels-photo-4352140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      'https://images.pexels.com/photos/4846458/pexels-photo-4846458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6197914/pexels-photo-6197914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5824903/pexels-photo-5824903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 4.7,
    reviews: 36,
    inStock: true,
    isFeatured: true,
    relatedProducts: ['2', '5', '11']
  },
  {
    id: '9',
    name: 'Commercial Grade Laminate',
    price: 3.99,
    category: 'laminate',
    material: 'laminate',
    color: 'walnut',
    dimensions: '5" x 48"',
    coverage: '26.8 sq ft per box',
    description: 'High-durability commercial grade laminate in a rich walnut finish. Designed to withstand heavy traffic while maintaining its beautiful appearance for years.',
    features: [
      'AC5 commercial grade rating',
      'Water-resistant core',
      'Enhanced scratch resistance',
      'Drop-lock installation system',
      'Compatible with underfloor heating'
    ],
    imageUrl: 'https://images.pexels.com/photos/6585765/pexels-photo-6585765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      'https://images.pexels.com/photos/6585639/pexels-photo-6585639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6585642/pexels-photo-6585642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4503265/pexels-photo-4503265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 4.3,
    reviews: 91,
    inStock: true,
    relatedProducts: ['3', '6', '12']
  },
  {
    id: '10',
    name: 'Natural Cork Flooring',
    price: 6.50,
    category: 'cork',
    material: 'cork',
    color: 'natural',
    dimensions: '12" x 36"',
    coverage: '22 sq ft per box',
    description: 'Sustainable cork flooring that provides natural insulation and sound dampening properties. Its unique cellular structure creates a comfortable, resilient surface that\'s gentle on joints.',
    features: [
      'Naturally antimicrobial',
      'Thermal insulation properties',
      'Sound reduction qualities',
      'Renewable and sustainable',
      'Comfortable underfoot'
    ],
    imageUrl: 'https://images.pexels.com/photos/5117913/pexels-photo-5117913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      'https://images.pexels.com/photos/4503731/pexels-photo-4503731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4503723/pexels-photo-4503723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6438752/pexels-photo-6438752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 4.5,
    reviews: 63,
    inStock: true,
    isNew: true,
    relatedProducts: ['4', '7', '12']
  },
  {
    id: '11',
    name: 'Hexagon Mosaic Marble',
    price: 14.99,
    category: 'tile',
    material: 'marble',
    color: 'black',
    dimensions: '2" hexagons',
    coverage: '10.5 sq ft per box',
    description: 'Elegant black marble hexagon mosaic tiles that create a dramatic impact in modern bathrooms and kitchens. The polished finish highlights the natural beauty of the stone.',
    features: [
      'Meshed backing for easy installation',
      'Natural stone variation',
      'Polished finish',
      'Suitable for walls and floors',
      'Striking geometric pattern'
    ],
    imageUrl: 'https://images.pexels.com/photos/6444256/pexels-photo-6444256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      'https://images.pexels.com/photos/6444267/pexels-photo-6444267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5825576/pexels-photo-5825576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6373524/pexels-photo-6373524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 4.8,
    reviews: 45,
    inStock: true,
    relatedProducts: ['2', '5', '8']
  },
  {
    id: '12',
    name: 'Herringbone Parquet Blocks',
    price: 10.25,
    category: 'hardwood',
    material: 'oak',
    color: 'honey',
    dimensions: '3" x 9"',
    coverage: '18 sq ft per box',
    description: 'Traditional oak parquet blocks in a warm honey finish, designed for creating classic herringbone patterns. These precision-cut blocks allow for intricate installation patterns that stand the test of time.',
    features: [
      'Precision milled edges',
      'Pre-finished with UV oil',
      'Tongue and groove on all sides',
      'Can be refinished multiple times',
      'Traditional craftsmanship'
    ],
    imageUrl: 'https://images.pexels.com/photos/5997954/pexels-photo-5997954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      'https://images.pexels.com/photos/5998353/pexels-photo-5998353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5998034/pexels-photo-5998034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4352251/pexels-photo-4352251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 4.7,
    reviews: 72,
    inStock: true,
    isFeatured: true,
    relatedProducts: ['1', '7', '10']
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.isNew);
};

export const getRelatedProducts = (productId: string): Product[] => {
  const product = getProductById(productId);
  if (!product || !product.relatedProducts) return [];
  
  return product.relatedProducts.map(id => getProductById(id)).filter(Boolean) as Product[];
};

export const getAllCategories = (): string[] => {
  return [...new Set(products.map(product => product.category))];
};

export const getAllMaterials = (): string[] => {
  return [...new Set(products.map(product => product.material))];
};

export const getAllColors = (): string[] => {
  return [...new Set(products.map(product => product.color))];
};

export const getMinMaxPrice = (): [number, number] => {
  const prices = products.map(product => product.price);
  return [Math.min(...prices), Math.max(...prices)];
};

export const filterProducts = (filters: Partial<FilterOptions>): Product[] => {
  return products.filter(product => {
    // Category filter
    if (filters.category && filters.category.length > 0 && !filters.category.includes(product.category)) {
      return false;
    }
    
    // Material filter
    if (filters.material && filters.material.length > 0 && !filters.material.includes(product.material)) {
      return false;
    }
    
    // Color filter
    if (filters.color && filters.color.length > 0 && !filters.color.includes(product.color)) {
      return false;
    }
    
    // Price range filter
    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      if (product.price < min || product.price > max) {
        return false;
      }
    }
    
    return true;
  });
};