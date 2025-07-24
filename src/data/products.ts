import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 399.99,
    description: "High-quality wireless headphones with active noise cancellation and premium sound quality. Perfect for music lovers and professionals.",
    category: "Electronics",
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500"
    ],
    rating: 4.8,
    reviews: 124,
    inStock: true,
    featured: true,
    tags: ["wireless", "audio", "premium"]
  },
  {
    id: 2,
    name: "Minimalist Watch",
    price: 149.99,
    description: "Elegant minimalist watch with leather strap. Classic design that complements any outfit.",
    category: "Accessories",
    image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=500"
    ],
    rating: 4.6,
    reviews: 89,
    inStock: true,
    featured: true,
    tags: ["watch", "minimal", "leather"]
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    price: 34.99,
    description: "Soft, sustainable organic cotton t-shirt. Comfortable fit and eco-friendly materials.",
    category: "Clothing",
    image: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/1304647/pexels-photo-1304647.jpeg?auto=compress&cs=tinysrgb&w=500"
    ],
    rating: 4.4,
    reviews: 67,
    inStock: true,
    featured: false,
    tags: ["organic", "cotton", "sustainable"]
  },
  {
    id: 4,
    name: "Smart Fitness Tracker",
    price: 199.99,
    description: "Advanced fitness tracker with heart rate monitoring, GPS, and comprehensive health insights.",
    category: "Electronics",
    image: "https://images.pexels.com/photos/1766604/pexels-photo-1766604.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/1766604/pexels-photo-1766604.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=500"
    ],
    rating: 4.7,
    reviews: 203,
    inStock: true,
    featured: true,
    tags: ["fitness", "smart", "health"]
  },
  {
    id: 5,
    name: "Luxury Leather Bag",
    price: 279.99,
    originalPrice: 329.99,
    description: "Premium leather handbag with multiple compartments. Elegant design for professional and casual use.",
    category: "Accessories",
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/1580267/pexels-photo-1580267.jpeg?auto=compress&cs=tinysrgb&w=500"
    ],
    rating: 4.9,
    reviews: 156,
    inStock: true,
    featured: true,
    tags: ["luxury", "leather", "handbag"]
  },
  {
    id: 6,
    name: "Ergonomic Office Chair",
    price: 449.99,
    description: "Professional ergonomic office chair with lumbar support and adjustable features for all-day comfort.",
    category: "Furniture",
    image: "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/1959065/pexels-photo-1959065.jpeg?auto=compress&cs=tinysrgb&w=500"
    ],
    rating: 4.5,
    reviews: 94,
    inStock: true,
    featured: false,
    tags: ["office", "ergonomic", "comfort"]
  },
  {
    id: 7,
    name: "Portable Bluetooth Speaker",
    price: 79.99,
    description: "Compact wireless speaker with powerful sound and long battery life. Perfect for outdoor adventures.",
    category: "Electronics",
    image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500"
    ],
    rating: 4.3,
    reviews: 178,
    inStock: true,
    featured: false,
    tags: ["bluetooth", "portable", "speaker"]
  },
  {
    id: 8,
    name: "Premium Coffee Beans",
    price: 24.99,
    description: "Single-origin coffee beans with rich flavor profile. Freshly roasted for optimal taste.",
    category: "Food & Beverage",
    image: "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=500"
    ],
    rating: 4.6,
    reviews: 45,
    inStock: true,
    featured: false,
    tags: ["coffee", "premium", "organic"]
  }
];