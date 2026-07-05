export interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  images: string[];
  description: string;
  fullDescription: string;
  features: string[];
  specifications: {
    [key: string]: string;
  };
  inStock: boolean;
  stockCount: number;
}

export const products: Product[] = [
  {
    id: 1,
    slug: 'premium-matte-paint',
    name: 'Premium Matte Paint',
    category: 'Paint',
    price: 45.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1567688535100-5dc79f1ca57e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGNvbG9yJTIwc2FtcGxlc3xlbnwxfHx8fDE3NjA0Mzc1MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1567688535100-5dc79f1ca57e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGNvbG9yJTIwc2FtcGxlc3xlbnwxfHx8fDE3NjA0Mzc1MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1567688535100-5dc79f1ca57e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGNvbG9yJTIwc2FtcGxlc3xlbnwxfHx8fDE3NjA0Mzc1MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1567688535100-5dc79f1ca57e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGNvbG9yJTIwc2FtcGxlc3xlbnwxfHx8fDE3NjA0Mzc1MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: '1 Gallon - Premium quality',
    fullDescription: 'Our Premium Matte Paint delivers exceptional coverage with a luxurious, velvety finish. Specially formulated for interior walls, this paint provides excellent hide and durability while maintaining a beautiful matte appearance. The low-VOC formula makes it safe for use in any room of your home.',
    features: [
      'Low-VOC, eco-friendly formula',
      'Excellent coverage and hide',
      'Washable and scrubbable',
      'Fade-resistant colors',
      'Self-priming on most surfaces',
      'Dries to touch in 1 hour',
    ],
    specifications: {
      'Coverage': '350-400 sq ft per gallon',
      'Finish': 'Matte',
      'Dry Time': '1 hour to touch, 2 hours recoat',
      'VOC Content': 'Low VOC',
      'Application': 'Brush, roller, or spray',
      'Clean Up': 'Soap and water',
    },
    inStock: true,
    stockCount: 45,
  },
  {
    id: 2,
    slug: 'professional-brush-set',
    name: 'Professional Brush Set',
    category: 'Tools',
    price: 29.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1583031537966-8d186811d75c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGJydXNoJTIwdG9vbHN8ZW58MXx8fHwxNzYwNTIxMTUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1583031537966-8d186811d75c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGJydXNoJTIwdG9vbHN8ZW58MXx8fHwxNzYwNTIxMTUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1583031537966-8d186811d75c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGJydXNoJTIwdG9vbHN8ZW58MXx8fHwxNzYwNTIxMTUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1583031537966-8d186811d75c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGJydXNoJTIwdG9vbHN8ZW58MXx8fHwxNzYwNTIxMTUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: '5-piece professional set',
    fullDescription: 'This professional-grade brush set includes everything you need for perfect paint application. Each brush is carefully crafted with premium synthetic bristles that hold more paint and provide smooth, even coverage. The ergonomic handles reduce hand fatigue during extended use.',
    features: [
      'Premium synthetic bristles',
      'Ergonomic comfort grip handles',
      'Suitable for all paint types',
      'Easy to clean and maintain',
      'Professional quality results',
      'Includes storage pouch',
    ],
    specifications: {
      'Set Includes': '1", 1.5", 2", 2.5", 3" brushes',
      'Bristle Type': 'Premium synthetic',
      'Handle Material': 'Hardwood with comfort grip',
      'Suitable For': 'All paint and stain types',
      'Warranty': '1 year manufacturer warranty',
    },
    inStock: true,
    stockCount: 32,
  },
  {
    id: 3,
    slug: 'luxury-wallpaper-geometric',
    name: 'Luxury Geometric Wallpaper',
    category: 'Wallpaper',
    price: 79.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1557411732-1797a9171fcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxscGFwZXIlMjBwYXR0ZXJuc3xlbnwxfHx8fDE3NjA1MjExNTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1557411732-1797a9171fcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxscGFwZXIlMjBwYXR0ZXJuc3xlbnwxfHx8fDE3NjA1MjExNTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1557411732-1797a9171fcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxscGFwZXIlMjBwYXR0ZXJuc3xlbnwxfHx8fDE3NjA1MjExNTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1557411732-1797a9171fcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxscGFwZXIlMjBwYXR0ZXJuc3xlbnwxfHx8fDE3NjA1MjExNTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Per roll - Designer collection',
    fullDescription: 'Add sophistication to any room with our Luxury Geometric Wallpaper. This designer collection features intricate patterns and premium materials that create depth and visual interest. The vinyl coating makes it durable and easy to maintain.',
    features: [
      'Premium vinyl-coated paper',
      'Washable and scrubbable surface',
      'Pre-pasted for easy installation',
      'Pattern repeat: 21 inches',
      'Fade-resistant inks',
      'Removable for future changes',
    ],
    specifications: {
      'Roll Size': '20.5" x 33 feet',
      'Coverage': 'Approximately 56 sq ft',
      'Pattern Repeat': '21 inches',
      'Material': 'Vinyl-coated paper',
      'Installation': 'Pre-pasted, apply water',
      'Maintenance': 'Washable with mild soap',
    },
    inStock: true,
    stockCount: 18,
  },
  {
    id: 4,
    slug: 'eggshell-finish-paint',
    name: 'Eggshell Finish Paint',
    category: 'Paint',
    price: 42.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1567688535100-5dc79f1ca57e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGNvbG9yJTIwc2FtcGxlc3xlbnwxfHx8fDE3NjA0Mzc1MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1567688535100-5dc79f1ca57e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGNvbG9yJTIwc2FtcGxlc3xlbnwxfHx8fDE3NjA0Mzc1MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1567688535100-5dc79f1ca57e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGNvbG9yJTIwc2FtcGxlc3xlbnwxfHx8fDE3NjA0Mzc1MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1567688535100-5dc79f1ca57e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGNvbG9yJTIwc2FtcGxlc3xlbnwxfHx8fDE3NjA0Mzc1MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: '1 Gallon - Silky smooth finish',
    fullDescription: 'Our Eggshell Finish Paint offers the perfect balance between matte and satin, providing a soft, velvety sheen that is ideal for high-traffic areas. The durable formula resists stains and scuffs while maintaining a beautiful, subtle glow.',
    features: [
      'Soft, low-luster sheen',
      'Excellent stain resistance',
      'Scuff and mark resistant',
      'One-coat coverage',
      'Low odor formula',
      'Mildew resistant',
    ],
    specifications: {
      'Coverage': '375-425 sq ft per gallon',
      'Finish': 'Eggshell (low luster)',
      'Dry Time': '1 hour to touch, 2 hours recoat',
      'VOC Content': 'Low VOC',
      'Application': 'Brush, roller, or spray',
      'Recommended For': 'Living rooms, dining rooms, bedrooms',
    },
    inStock: true,
    stockCount: 52,
  },
  {
    id: 5,
    slug: 'paint-roller-kit',
    name: 'Premium Paint Roller Kit',
    category: 'Tools',
    price: 24.99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1583031537966-8d186811d75c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGJydXNoJTIwdG9vbHN8ZW58MXx8fHwxNzYwNTIxMTUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1583031537966-8d186811d75c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGJydXNoJTIwdG9vbHN8ZW58MXx8fHwxNzYwNTIxMTUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1583031537966-8d186811d75c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGJydXNoJTIwdG9vbHN8ZW58MXx8fHwxNzYwNTIxMTUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1583031537966-8d186811d75c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGJydXNoJTIwdG9vbHN8ZW58MXx8fHwxNzYwNTIxMTUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Complete roller system',
    fullDescription: 'This complete paint roller kit includes everything you need for fast, efficient painting. The premium roller covers provide excellent paint pickup and release, while the sturdy frame ensures smooth, even application. Perfect for walls and ceilings.',
    features: [
      'Heavy-duty roller frame',
      '3 premium roller covers included',
      'Comfortable grip handle',
      'Extension pole compatible',
      'Professional results',
      'Reusable and washable',
    ],
    specifications: {
      'Roller Width': '9 inches',
      'Cover Nap': '3/8" medium nap',
      'Handle Length': '4 inches',
      'Frame Material': 'Heavy-duty wire',
      'Compatible With': 'Standard extension poles',
      'Covers Included': '3 roller covers',
    },
    inStock: true,
    stockCount: 28,
  },
  {
    id: 6,
    slug: 'textured-wallpaper-damask',
    name: 'Textured Damask Wallpaper',
    category: 'Wallpaper',
    price: 89.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1557411732-1797a9171fcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxscGFwZXIlMjBwYXR0ZXJuc3xlbnwxfHx8fDE3NjA1MjExNTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1557411732-1797a9171fcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxscGFwZXIlMjBwYXR0ZXJuc3xlbnwxfHx8fDE3NjA1MjExNTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1557411732-1797a9171fcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxscGFwZXIlMjBwYXR0ZXJuc3xlbnwxfHx8fDE3NjA1MjExNTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1557411732-1797a9171fcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxscGFwZXIlMjBwYXR0ZXJuc3xlbnwxfHx8fDE3NjA1MjExNTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Per roll - 3D texture',
    fullDescription: 'Elevate your space with our Textured Damask Wallpaper featuring raised 3D patterns that add depth and luxury. The classic damask design is reimagined with modern colors and a touchable texture that creates visual and tactile interest.',
    features: [
      'Raised 3D textured surface',
      'Classic damask pattern',
      'Paintable if desired',
      'Heavy-duty construction',
      'Hides wall imperfections',
      'Strippable for removal',
    ],
    specifications: {
      'Roll Size': '20.5" x 33 feet',
      'Coverage': 'Approximately 56 sq ft',
      'Pattern Repeat': '25 inches',
      'Material': 'Vinyl with embossed texture',
      'Installation': 'Paste-the-wall application',
      'Special Features': 'Can be painted over',
    },
    inStock: true,
    stockCount: 12,
  },
];
