export interface Service {
  id: number;
  slug: string;
  title: string;
  icon: string;
  shortDescription: string;
  image: string;
  images: string[];
  fullDescription: string;
  features: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  pricing: {
    tier: string;
    price: string;
    description: string;
    features: string[];
  }[];
  benefits: string[];
}

export const services: Service[] = [
  {
    id: 1,
    slug: 'kitchen-design',
    title: 'Kitchen Design',
    icon: 'ChefHat',
    shortDescription: 'Transform your kitchen into a culinary masterpiece with our custom design solutions. From modern minimalist to classic elegance.',
    image: 'https://images.unsplash.com/photo-1682888813795-192fca4a10d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc2MDQ0NDU5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1682888813795-192fca4a10d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc2MDQ0NDU5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBraXRjaGVufGVufDF8fHx8MTc2MDQ2NDcwOHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1682888813795-192fca4a10d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc2MDQ0NDU5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    fullDescription: 'Your kitchen is the heart of your home, and we believe it should reflect your style while maximizing functionality. Our expert kitchen designers work closely with you to create a space that perfectly balances aesthetics with practicality. Whether you dream of a sleek modern kitchen or a warm traditional space, we bring your vision to life with meticulous attention to detail.',
    features: [
      'Custom cabinet design and installation',
      'Space planning and layout optimization',
      'Countertop selection and installation',
      'Lighting design and fixture placement',
      'Appliance consultation and integration',
      'Backsplash design and tile work',
      'Hardware selection and installation',
      '3D rendering and visualization',
    ],
    process: [
      {
        step: 1,
        title: 'Initial Consultation',
        description: 'We meet with you to discuss your vision, needs, and budget. We take measurements and photographs of your current space.',
      },
      {
        step: 2,
        title: 'Design Development',
        description: 'Our team creates detailed plans, 3D renderings, and material selections. We present options and refine the design based on your feedback.',
      },
      {
        step: 3,
        title: 'Material Selection',
        description: 'Choose from our curated selection of cabinets, countertops, fixtures, and finishes. We guide you through all options within your budget.',
      },
      {
        step: 4,
        title: 'Installation',
        description: 'Our skilled craftsmen execute the design with precision. We manage all aspects of the renovation, keeping you informed throughout.',
      },
      {
        step: 5,
        title: 'Final Walkthrough',
        description: 'We conduct a thorough inspection with you, ensuring every detail meets our high standards and your expectations.',
      },
    ],
    pricing: [
      {
        tier: 'Design Consultation',
        price: 'Starting at $500',
        description: 'Perfect for those seeking professional guidance',
        features: [
          'Initial design consultation (2 hours)',
          'Space planning and layout concepts',
          'Basic 3D rendering',
          'Material and color recommendations',
          'Detailed design document',
        ],
      },
      {
        tier: 'Full Design Package',
        price: 'Starting at $2,500',
        description: 'Comprehensive design and project management',
        features: [
          'Complete design development',
          'Multiple 3D renderings',
          'Detailed construction drawings',
          'Material sourcing and procurement',
          'Project management and coordination',
          'On-site installation supervision',
        ],
      },
      {
        tier: 'Turnkey Renovation',
        price: 'Custom Quote',
        description: 'Complete kitchen transformation',
        features: [
          'All Full Design Package features',
          'Complete demolition and construction',
          'Custom cabinetry installation',
          'Plumbing and electrical work',
          'Countertop and backsplash installation',
          'Final styling and accessories',
        ],
      },
    ],
    benefits: [
      'Increased home value',
      'Improved functionality and workflow',
      'Personalized design that reflects your style',
      'Professional project management',
      'Access to trade discounts on materials',
      'Warranty on all workmanship',
    ],
  },
  {
    id: 2,
    slug: 'interior-painting',
    title: 'Interior Painting',
    icon: 'Paintbrush',
    shortDescription: 'Professional painting services with premium finishes. We bring color and life to every room with precision and care.',
    image: 'https://images.unsplash.com/photo-1666179861891-db5155e290c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGhvdXNlJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzYwNTIxMTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1666179861891-db5155e290c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGhvdXNlJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzYwNTIxMTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1567688535100-5dc79f1ca57e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGNvbG9yJTIwc2FtcGxlc3xlbnwxfHx8fDE3NjA0Mzc1MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1666179861891-db5155e290c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGhvdXNlJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzYwNTIxMTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    fullDescription: 'A fresh coat of paint can completely transform a space. Our professional painting services combine expert color consultation, meticulous surface preparation, and flawless application techniques. We use only premium, low-VOC paints and take pride in delivering stunning results that last.',
    features: [
      'Expert color consultation',
      'Thorough surface preparation',
      'Premium paint application',
      'Trim and detail work',
      'Ceiling painting',
      'Accent wall creation',
      'Furniture protection and room prep',
      'Complete clean-up',
    ],
    process: [
      {
        step: 1,
        title: 'Color Consultation',
        description: 'We help you select the perfect colors that complement your space and personal style. We provide paint samples and lighting considerations.',
      },
      {
        step: 2,
        title: 'Preparation',
        description: 'We protect your furniture and floors, repair any wall imperfections, and properly prepare all surfaces for optimal paint adhesion.',
      },
      {
        step: 3,
        title: 'Priming',
        description: 'We apply high-quality primer where needed to ensure even color coverage and paint longevity.',
      },
      {
        step: 4,
        title: 'Painting',
        description: 'Our skilled painters apply paint with precision, using professional techniques for a smooth, even finish.',
      },
      {
        step: 5,
        title: 'Final Details & Clean-Up',
        description: 'We complete all detail work, remove protection materials, and leave your space spotless.',
      },
    ],
    pricing: [
      {
        tier: 'Single Room',
        price: 'Starting at $300',
        description: 'Perfect for refreshing one space',
        features: [
          'Color consultation',
          'Surface preparation',
          'Two coats of premium paint',
          'Trim painting (optional)',
          'Room protection and clean-up',
        ],
      },
      {
        tier: 'Multi-Room Package',
        price: 'Starting at $1,200',
        description: 'Best value for multiple rooms',
        features: [
          'Complete color consultation',
          'Walls and ceilings (up to 3 rooms)',
          'All trim and doors',
          'Minor wall repairs included',
          'Premium paint and materials',
          'Full protection and clean-up',
        ],
      },
      {
        tier: 'Whole Home',
        price: 'Custom Quote',
        description: 'Complete interior transformation',
        features: [
          'Comprehensive color scheme',
          'All rooms, walls, and ceilings',
          'All trim, doors, and baseboards',
          'Wall repair and preparation',
          'Accent walls and special finishes',
          'Flexible scheduling',
        ],
      },
    ],
    benefits: [
      'Instant home refresh',
      'Expert color matching',
      'Professional-grade finish',
      'Time-saving service',
      'Mess-free experience',
      'Warranty on workmanship',
    ],
  },
  {
    id: 3,
    slug: 'home-interior-design',
    title: 'Home Interior Design',
    icon: 'Home',
    shortDescription: 'Complete interior design services for every space in your home. Creating harmonious and functional living environments.',
    image: 'https://images.unsplash.com/photo-1638885930125-85350348d266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2MDUyMTE0OXww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1638885930125-85350348d266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2MDUyMTE0OXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1668089677938-b52086753f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYwNDEyNDc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1758977403403-c51ef509e788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGluaW5nJTIwcm9vbXxlbnwxfHx8fDE3NjA0MzQ1MDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    fullDescription: 'Transform your entire home into a cohesive, beautiful living space that reflects your personality and lifestyle. Our comprehensive interior design services cover everything from space planning and color schemes to furniture selection and final styling. We create environments that are not only visually stunning but also highly functional.',
    features: [
      'Comprehensive space planning',
      'Custom color schemes',
      'Furniture selection and layout',
      'Lighting design',
      'Window treatment design',
      'Accessory and artwork curation',
      'Material and finish selection',
      'Project coordination and management',
    ],
    process: [
      {
        step: 1,
        title: 'Discovery & Vision',
        description: 'We learn about your lifestyle, preferences, and goals through in-depth discussions and questionnaires. We assess your space and take detailed measurements.',
      },
      {
        step: 2,
        title: 'Concept Development',
        description: 'We create mood boards, color palettes, and initial design concepts that align with your vision and budget.',
      },
      {
        step: 3,
        title: 'Design Presentation',
        description: 'We present detailed plans including floor layouts, 3D renderings, material samples, and furniture selections for your approval.',
      },
      {
        step: 4,
        title: 'Procurement & Coordination',
        description: 'We order all furniture, materials, and accessories. We coordinate with contractors and manage the project timeline.',
      },
      {
        step: 5,
        title: 'Installation & Styling',
        description: 'We oversee installation of all elements and complete the final styling touches to bring the design to life.',
      },
    ],
    pricing: [
      {
        tier: 'Design Consultation',
        price: 'Starting at $750',
        description: 'Expert guidance for DIY implementation',
        features: [
          'In-home consultation (3 hours)',
          'Space planning recommendations',
          'Color scheme development',
          'Furniture layout suggestions',
          'Detailed design guide',
        ],
      },
      {
        tier: 'Full Room Design',
        price: 'Starting at $3,500',
        description: 'Complete design for one room',
        features: [
          'Comprehensive design development',
          '3D renderings and mood boards',
          'Complete furniture and decor selection',
          'Shopping list with links/sources',
          'Layout and styling plans',
          'Two revision rounds',
        ],
      },
      {
        tier: 'Full Home Design',
        price: 'Custom Quote',
        description: 'Complete interior transformation',
        features: [
          'Whole-home design concept',
          'All Full Room Design features',
          'Project management',
          'Contractor coordination',
          'Furniture procurement',
          'Installation and styling',
          'Unlimited revisions',
        ],
      },
    ],
    benefits: [
      'Cohesive, designer look',
      'Maximized space functionality',
      'Access to trade-only resources',
      'Time and stress savings',
      'Professional project management',
      'Increased home value',
    ],
  },
  {
    id: 4,
    slug: 'materials-store',
    title: 'Paints & Materials Store',
    icon: 'ShoppingBag',
    shortDescription: 'Shop premium paints, brushes, wallpapers, and materials. Everything you need for your DIY projects or professional work.',
    image: 'https://images.unsplash.com/photo-1567688535100-5dc79f1ca57e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGNvbG9yJTIwc2FtcGxlc3xlbnwxfHx8fDE3NjA0Mzc1MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1567688535100-5dc79f1ca57e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGNvbG9yJTIwc2FtcGxlc3xlbnwxfHx8fDE3NjA0Mzc1MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1583031537966-8d186811d75c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGJydXNoJTIwdG9vbHN8ZW58MXx8fHwxNzYwNTIxMTUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1557411732-1797a9171fcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxscGFwZXIlMjBwYXR0ZXJuc3xlbnwxfHx8fDE3NjA1MjExNTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    fullDescription: 'Browse our curated selection of premium paints, professional tools, and designer wallpapers. Whether you\'re a DIY enthusiast or a professional contractor, we offer high-quality products at competitive prices. Our knowledgeable staff can help you select the perfect materials for your project.',
    features: [
      'Premium paint brands',
      'Professional-grade tools',
      'Designer wallpaper collection',
      'Color matching services',
      'Expert product advice',
      'Bulk purchase discounts',
      'Delivery services available',
      'Sample testing programs',
    ],
    process: [
      {
        step: 1,
        title: 'Browse Our Collection',
        description: 'Explore our online store or visit our showroom to see our full range of paints, tools, and wallpapers.',
      },
      {
        step: 2,
        title: 'Get Expert Advice',
        description: 'Consult with our team about product selection, quantity needed, and application techniques.',
      },
      {
        step: 3,
        title: 'Order & Purchase',
        description: 'Place your order online or in-store. We offer multiple payment options and can arrange delivery.',
      },
      {
        step: 4,
        title: 'Delivery or Pickup',
        description: 'Choose home delivery or schedule a pickup time. We ensure your materials arrive in perfect condition.',
      },
      {
        step: 5,
        title: 'Ongoing Support',
        description: 'We\'re here to answer questions and provide guidance throughout your project.',
      },
    ],
    pricing: [
      {
        tier: 'DIY Starter Kit',
        price: 'Starting at $150',
        description: 'Everything for a small project',
        features: [
          '1 gallon premium paint',
          'Basic brush and roller set',
          'Painter\'s tape and drop cloth',
          'Color consultation included',
          'Application guide',
        ],
      },
      {
        tier: 'Professional Package',
        price: 'Starting at $500',
        description: 'Complete materials for larger projects',
        features: [
          'Multiple gallons of paint',
          'Professional tool set',
          'Surface prep materials',
          'Bulk pricing discount',
          'Priority delivery',
          'Technical support',
        ],
      },
      {
        tier: 'Custom Orders',
        price: 'Custom Quote',
        description: 'Special orders and commercial projects',
        features: [
          'Custom color matching',
          'Bulk commercial pricing',
          'Special order products',
          'Scheduled deliveries',
          'Account management',
          'Extended payment terms',
        ],
      },
    ],
    benefits: [
      'Premium quality products',
      'Competitive pricing',
      'Expert product knowledge',
      'Convenient online shopping',
      'Fast delivery options',
      'Satisfaction guarantee',
    ],
  },
];
