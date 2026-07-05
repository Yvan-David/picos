"use client";
import { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Star } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from 'sonner';

export default function Shop() {
  const [cart, setCart] = useState<{ [key: number]: number }>({});

  const products = [
    {
      id: 1,
      name: 'Premium Matte Paint',
      category: 'Paint',
      price: 45.99,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1567688535100-5dc79f1ca57e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGNvbG9yJTIwc2FtcGxlc3xlbnwxfHx8fDE3NjA0Mzc1MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: '1 Gallon - Premium quality',
    },
    {
      id: 2,
      name: 'Professional Brush Set',
      category: 'Tools',
      price: 29.99,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1583031537966-8d186811d75c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGJydXNoJTIwdG9vbHN8ZW58MXx8fHwxNzYwNTIxMTUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: '5-piece professional set',
    },
    {
      id: 3,
      name: 'Luxury Wallpaper',
      category: 'Wallpaper',
      price: 79.99,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1557411732-1797a9171fcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxscGFwZXIlMjBwYXR0ZXJuc3xlbnwxfHx8fDE3NjA1MjExNTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Per roll - Designer collection',
    },
    {
      id: 4,
      name: 'Eggshell Finish Paint',
      category: 'Paint',
      price: 42.99,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1567688535100-5dc79f1ca57e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGNvbG9yJTIwc2FtcGxlc3xlbnwxfHx8fDE3NjA0Mzc1MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: '1 Gallon - Silky smooth finish',
    },
    {
      id: 5,
      name: 'Paint Roller Kit',
      category: 'Tools',
      price: 24.99,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1583031537966-8d186811d75c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGJydXNoJTIwdG9vbHN8ZW58MXx8fHwxNzYwNTIxMTUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Complete roller system',
    },
    {
      id: 6,
      name: 'Textured Wallpaper',
      category: 'Wallpaper',
      price: 89.99,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1557411732-1797a9171fcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxscGFwZXIlMjBwYXR0ZXJuc3xlbnwxfHx8fDE3NjA1MjExNTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Per roll - 3D texture',
    },
  ];

  const addToCart = (productId: number, productName: string) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
    toast.success(`${productName} added to cart!`);
  };

  return (
    <section id="shop" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-[#f7c9d8]/30 rounded-full mb-4">
              <span className="text-[#b76e79]">Online Store</span>
            </div>
            <h2 className="font-['Playfair_Display'] text-gray-900 mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Premium Paints & Materials
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Shop high-quality paints, tools, and materials for your next project
            </p>
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden bg-[#fef9fa]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-[#b76e79] text-white rounded-full text-sm">
                  {product.category}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${
                        i < Math.floor(product.rating)
                          ? 'fill-[#f7c9d8] text-[#f7c9d8]'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600">({product.rating})</span>
                </div>

                <h3 className="text-gray-900 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{product.description}</p>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl text-[#b76e79]">${product.price}</span>
                  </div>
                  <Button
                    onClick={() => addToCart(product.id, product.name)}
                    className="bg-gradient-to-r from-[#b76e79] to-[#e8a0b9] hover:from-[#a65d6a] hover:to-[#d98fa8] text-white rounded-full"
                  >
                    <ShoppingCart size={18} className="mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
