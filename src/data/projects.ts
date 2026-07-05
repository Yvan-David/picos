export interface Project {
  id: number;
  slug: string;
  category: string;
  title: string;
  image: string;
  description: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  images: string[];
  client: string;
  duration: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'modern-scandinavian-kitchen',
    category: 'Kitchens',
    title: 'Modern Scandinavian Kitchen',
    image: 'https://images.unsplash.com/photo-1682888813795-192fca4a10d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc2MDQ0NDU5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Minimalist design with warm wood tones',
    fullDescription: 'A stunning transformation of a dated kitchen into a modern Scandinavian-inspired space that balances functionality with aesthetic beauty. The design emphasizes clean lines, natural materials, and an abundance of natural light.',
    challenge: 'The original kitchen was cramped and lacked storage. The client wanted an open, airy space that could accommodate family gatherings while maintaining a minimalist aesthetic.',
    solution: 'We removed a non-structural wall to create an open-plan layout, installed custom floor-to-ceiling cabinetry with hidden storage, and incorporated a large island with built-in seating. Warm wood tones and white surfaces create a bright, welcoming atmosphere.',
    images: [
      'https://images.unsplash.com/photo-1682888813795-192fca4a10d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc2MDQ0NDU5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBraXRjaGVufGVufDF8fHx8MTc2MDQ2NDcwOHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1682888813795-192fca4a10d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc2MDQ0NDU5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    client: 'Johnson Family',
    duration: '8 weeks',
    year: '2024',
  },
  {
    id: 2,
    slug: 'luxury-contemporary-kitchen',
    category: 'Kitchens',
    title: 'Luxury Contemporary Kitchen',
    image: 'https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBraXRjaGVufGVufDF8fHx8MTc2MDQ2NDcwOHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Elegant marble and gold accents',
    fullDescription: 'An opulent kitchen design featuring premium materials including Calacatta marble countertops, custom gold hardware, and state-of-the-art appliances. Every detail was carefully curated to create a space that exudes luxury and sophistication.',
    challenge: 'Creating a high-end, luxurious kitchen that didn\'t feel cold or unwelcoming, while incorporating top-of-the-line appliances and finishes.',
    solution: 'We balanced luxury with warmth by mixing marble with warm metallic accents, incorporating soft lighting, and adding textural elements. The island became the centerpiece with a stunning waterfall marble edge.',
    images: [
      'https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBraXRjaGVufGVufDF8fHx8MTc2MDQ2NDcwOHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1682888813795-192fca4a10d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc2MDQ0NDU5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBraXRjaGVufGVufDF8fHx8MTc2MDQ2NDcwOHww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    client: 'Chen Residence',
    duration: '10 weeks',
    year: '2024',
  },
  {
    id: 3,
    slug: 'cozy-modern-living-space',
    category: 'Living Rooms',
    title: 'Cozy Modern Living Space',
    image: 'https://images.unsplash.com/photo-1638885930125-85350348d266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2MDUyMTE0OXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Warm neutrals and plush textures',
    fullDescription: 'A thoughtfully designed living room that combines modern aesthetics with comfort. The space features layered textures, warm neutral tones, and carefully selected furniture pieces that create an inviting atmosphere perfect for relaxation and entertaining.',
    challenge: 'The client wanted a living room that felt both modern and cozy, suitable for family movie nights and formal gatherings alike.',
    solution: 'We created zones within the space using area rugs and furniture placement, incorporated plush textiles and soft lighting, and chose a neutral palette with warm undertones that works for any occasion.',
    images: [
      'https://images.unsplash.com/photo-1638885930125-85350348d266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2MDUyMTE0OXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1758977403403-c51ef509e788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGluaW5nJTIwcm9vbXxlbnwxfHx8fDE3NjA0MzQ1MDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1638885930125-85350348d266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2MDUyMTE0OXww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    client: 'Anderson Family',
    duration: '6 weeks',
    year: '2024',
  },
  {
    id: 4,
    slug: 'premium-paint-application',
    category: 'Paint Finishes',
    title: 'Premium Paint Application',
    image: 'https://images.unsplash.com/photo-1666179861891-db5155e290c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGhvdXNlJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzYwNTIxMTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Flawless finish and color harmony',
    fullDescription: 'A complete interior painting project showcasing our expertise in color consultation, surface preparation, and flawless application. The carefully selected color palette creates a cohesive flow throughout the home.',
    challenge: 'Creating a harmonious color scheme that would flow seamlessly from room to room while giving each space its own character.',
    solution: 'We developed a custom color palette with subtle variations that complement each room\'s function and natural lighting. Premium paints and expert application techniques ensured a perfect, long-lasting finish.',
    images: [
      'https://images.unsplash.com/photo-1666179861891-db5155e290c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGhvdXNlJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzYwNTIxMTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1567688535100-5dc79f1ca57e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGNvbG9yJTIwc2FtcGxlc3xlbnwxfHx8fDE3NjA0Mzc1MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1666179861891-db5155e290c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGhvdXNlJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzYwNTIxMTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    client: 'Miller Residence',
    duration: '4 weeks',
    year: '2023',
  },
  {
    id: 5,
    slug: 'serene-master-bedroom',
    category: 'Bedrooms',
    title: 'Serene Master Bedroom',
    image: 'https://images.unsplash.com/photo-1668089677938-b52086753f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYwNDEyNDc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Tranquil retreat with soft colors',
    fullDescription: 'A master bedroom designed as a peaceful sanctuary. Soft, calming colors, luxurious textiles, and thoughtful lighting create a space perfect for rest and relaxation. Every element was chosen to promote tranquility and comfort.',
    challenge: 'Designing a bedroom that serves as a true retreat from daily stress while maintaining elegance and style.',
    solution: 'We used a soothing color palette of soft blues and warm neutrals, incorporated blackout window treatments, added layered lighting with dimmers, and selected high-quality bedding and furniture for ultimate comfort.',
    images: [
      'https://images.unsplash.com/photo-1668089677938-b52086753f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYwNDEyNDc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1638885930125-85350348d266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2MDUyMTE0OXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1668089677938-b52086753f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYwNDEyNDc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    client: 'Roberts Family',
    duration: '5 weeks',
    year: '2024',
  },
  {
    id: 6,
    slug: 'elegant-dining-area',
    category: 'Living Rooms',
    title: 'Elegant Dining Area',
    image: 'https://images.unsplash.com/photo-1758977403403-c51ef509e788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGluaW5nJTIwcm9vbXxlbnwxfHx8fDE3NjA0MzQ1MDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Sophisticated design for entertaining',
    fullDescription: 'A formal dining area designed for memorable dinner parties and family gatherings. The space combines classic elegance with modern comfort, featuring a stunning chandelier, custom table, and carefully curated artwork.',
    challenge: 'Creating a formal dining space that feels sophisticated yet approachable for everyday family meals.',
    solution: 'We selected timeless furniture pieces with clean lines, installed statement lighting, added texture through window treatments and a custom rug, and incorporated a mix of formal and casual elements for versatility.',
    images: [
      'https://images.unsplash.com/photo-1758977403403-c51ef509e788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGluaW5nJTIwcm9vbXxlbnwxfHx8fDE3NjA0MzQ1MDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1638885930125-85350348d266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2MDUyMTE0OXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1758977403403-c51ef509e788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGluaW5nJTIwcm9vbXxlbnwxfHx8fDE3NjA0MzQ1MDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    client: 'Thompson Estate',
    duration: '6 weeks',
    year: '2023',
  },
];
