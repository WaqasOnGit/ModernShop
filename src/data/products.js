export const sampleProducts = [
  {
    id: 1,
    name: "Premium Leather Handbag",
    price: 899,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop",
    rating: 5,
    reviews: 124,
    tags: ["New", "VIP", "Limited Edition"],
    description: "Crafted from the finest Italian leather, this handbag represents the pinnacle of luxury and sophistication. Each stitch tells a story of craftsmanship passed down through generations.",
    category: "Accessories",
    inStock: true,
    discount: 0
  },
  {
    id: 2,
    name: "Diamond Studded Watch",
    price: 2499,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    rating: 5,
    reviews: 89,
    tags: ["Hot", "VIP", "Exclusive"],
    description: "Swiss-made timepiece with genuine diamonds and premium materials. A masterpiece of precision engineering and timeless elegance.",
    category: "Watches",
    inStock: true,
    discount: 15
  },
  {
    id: 3,
    name: "Silk Evening Dress",
    price: 1299,
    image: " https://media.istockphoto.com/id/150685327/photo/vintage-fashion.jpg?s=612x612&w=0&k=20&c=OVbaGyZrvPJFK0-I1bcn8_II1MP2PjctF-VGoPFYDQM=", // Replace with your desired image URL
    rating: 4,
    reviews: 67,
    tags: ["New", "Designer"],
    description: "Elegant silk dress perfect for special occasions and formal events. Flows like liquid gold against your skin.",
    category: "Fashion",
    inStock: true,
    discount: 0
  },
  {
    id: 4,
    name: "Gold Plated Sunglasses",
    price: 599,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    rating: 4,
    reviews: 156,
    tags: ["Hot", "Trending"],
    description: "Designer sunglasses with gold-plated frames and premium UV protection. See the world through rose-tinted luxury.",
    category: "Accessories",
    inStock: false,
    discount: 20
  },
  {
    id: 5,
    name: "Crystal Champagne Flutes",
    price: 299,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs5QMRTCXUYv4unp_z5wGGLSngIKE6ctBmXw&s", // Replace with your desired image URL
    rating: 5,
    reviews: 203,
    tags: ["New", "Home & Living"],
    description: "Hand-cut crystal champagne flutes that make every celebration sparkle. Each glass sings with the clarity of pure luxury.",
    category: "Home & Living",
    inStock: true,
    discount: 0
  },
  {
    id: 6,
    name: "Artisan Perfume Set",
    price: 449,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop",
    rating: 5,
    reviews: 89,
    tags: ["Exclusive", "Limited Edition"],
    description: "A curated collection of rare fragrances, each bottle a masterpiece of olfactory art. Transport yourself to exotic destinations.",
    category: "Beauty",
    inStock: true,
    discount: 10
  },
  {
    id: 7,
    name: "Vintage Wine Collection",
    price: 1899,
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=400&fit=crop",
    rating: 5,
    reviews: 45,
    tags: ["VIP", "Rare", "Investment"],
    description: "A carefully selected collection of vintage wines from the world's most prestigious vineyards. Each bottle tells a story of time and terroir.",
    category: "Wine & Spirits",
    inStock: true,
    discount: 0
  },
  {
    id: 8,
    name: "Luxury Spa Experience",
    price: 799,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=400&fit=crop",
    rating: 5,
    reviews: 156,
    tags: ["Experience", "Wellness", "VIP"],
    description: "Indulge in a transformative spa experience designed to rejuvenate your body, mind, and spirit. Pure bliss awaits.",
    category: "Experiences",
    inStock: true,
    discount: 25
  },
  {
    id: 9,
    name: "Designer Jewelry Box",
    price: 349,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    rating: 4,
    reviews: 78,
    tags: ["New", "Storage"],
    description: "A luxurious jewelry box crafted from exotic woods and lined with the finest silk. Your treasures deserve nothing less.",
    category: "Home & Living",
    inStock: true,
    discount: 0
  },
  {
    id: 10,
    name: "Premium Coffee Set",
    price: 199,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop",
    rating: 4,
    reviews: 234,
    tags: ["Gourmet", "Kitchen"],
    description: "Experience coffee like never before with our premium coffee set. From bean to cup, every step is a ritual of luxury.",
    category: "Gourmet",
    inStock: true,
    discount: 15
  },
  {
    id: 11,
    name: "Luxury Travel Case",
    price: 599,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    rating: 5,
    reviews: 67,
    tags: ["Travel", "Premium"],
    description: "Travel in style with our luxury travel case. Made from the finest materials, it's as beautiful as it is functional.",
    category: "Travel",
    inStock: true,
    discount: 0
  },
  {
    id: 12,
    name: "Artisan Chocolate Collection",
    price: 149,
    image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=400&h=400&fit=crop",
    rating: 5,
    reviews: 189,
    tags: ["Gourmet", "Artisan"],
    description: "Handcrafted chocolates made with the finest cocoa beans. Each piece is a work of art that delights the senses.",
    category: "Gourmet",
    inStock: true,
    discount: 20
  }
];

// Product categories for filtering
export const productCategories = [
  "All",
  "Accessories", 
  "Watches",
  "Fashion",
  "Home & Living",
  "Beauty",
  "Wine & Spirits",
  "Experiences",
  "Gourmet",
  "Travel"
];

// Featured collections
export const featuredCollections = [
  {
    id: "summer-luxury",
    name: "Summer Luxury Collection",
    description: "Embrace the season with our curated summer essentials",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    products: [1, 3, 8, 11]
  },
  {
    id: "vip-exclusive",
    name: "VIP Exclusive",
    description: "Members-only access to our most prestigious items",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
    products: [2, 7, 8]
  },
  {
    id: "artisan-crafted",
    name: "Artisan Crafted",
    description: "Handmade treasures from master craftsmen worldwide",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&h=400&fit=crop",
    products: [5, 6, 9, 12]
  }
];
