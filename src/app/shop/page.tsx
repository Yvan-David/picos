"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { toast } from 'sonner';
import { products } from '@/data/products';

export default function ShopPage() {
  const [cart, setCart] = useState<{ [key: number]: number }>({});
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Paint', 'Tools', 'Wallpaper'];

  const filteredProducts =
    activeFilter === 'All'
      ? products
      : products.filter((product) => product.category === activeFilter);

  const addToCart = (productId: number, productName: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
    toast.success(`${productName} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fef9fa] to-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-[#f7c9d8]/30 rounded-full mb-4">
              <span className="text-[#b76e79]">Online Store</span>
            </div>
            <h1 className="font-['Playfair_Display'] text-gray-900 mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Premium Paints & Materials
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Browse our complete collection of high-quality paints, tools, and materials
            </p>
          </motion.div>
        </div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-[#b76e79] to-[#e8a0b9] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-[#f7c9d8]/30 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <Link href={`/shop/product/${product.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 6) * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 cursor-pointer"
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
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="bg-white px-4 py-2 rounded-full text-gray-900">Out of Stock</span>
                    </div>
                  )}
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
                      onClick={(e) => addToCart(product.id, product.name, e)}
                      disabled={!product.inStock}
                      className="bg-gradient-to-r from-[#b76e79] to-[#e8a0b9] hover:from-[#a65d6a] hover:to-[#d98fa8] text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ShoppingCart size={18} className="mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
