"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'motion/react';
import { ShoppingCart, Star, ChevronLeft, Package, Truck, Shield, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { products } from '@/data/products';

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-gray-900 mb-4">Product Not Found</h2>
          <Link href="/shop">
            <Button className="bg-gradient-to-r from-[#b76e79] to-[#e8a0b9] text-white">
              Back to Shop
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    toast.success(`${quantity} x ${product.name} added to cart!`);
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fef9fa] to-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href="/shop">
          <motion.button
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 text-gray-600 hover:text-[#b76e79] mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Shop
          </motion.button>
        </Link>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl mb-4 bg-white">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? 'border-[#b76e79] shadow-md'
                      : 'border-gray-200 hover:border-[#f7c9d8]'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 bg-[#f7c9d8] text-[#b76e79] rounded-full text-sm mb-4">
              {product.category}
            </div>

            <h1 className="font-['Playfair_Display'] text-gray-900 mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={`${
                    i < Math.floor(product.rating)
                      ? 'fill-[#f7c9d8] text-[#f7c9d8]'
                      : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="text-gray-600">({product.rating} rating)</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <span className="text-4xl text-[#b76e79]">${product.price}</span>
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              {product.inStock ? (
                <span className="text-green-600 flex items-center gap-2">
                  <Package size={18} />
                  In Stock ({product.stockCount} available)
                </span>
              ) : (
                <span className="text-red-600">Out of Stock</span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-6">{product.fullDescription}</p>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full border-2 border-[#f7c9d8] hover:bg-[#f7c9d8] transition-colors"
                >
                  -
                </button>
                <span className="text-xl text-gray-900 w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                  className="w-10 h-10 rounded-full border-2 border-[#f7c9d8] hover:bg-[#f7c9d8] transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-4 mb-8">
              <Button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 bg-gradient-to-r from-[#b76e79] to-[#e8a0b9] hover:from-[#a65d6a] hover:to-[#d98fa8] text-white rounded-xl h-14"
              >
                <ShoppingCart className="mr-2" size={20} />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#b76e79] text-[#b76e79] hover:bg-[#fef9fa] rounded-xl h-14 px-8"
              >
                Buy Now
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-[#fef9fa] rounded-xl">
                <Truck className="mx-auto text-[#b76e79] mb-2" size={24} />
                <p className="text-sm text-gray-600">Free Shipping</p>
              </div>
              <div className="text-center p-4 bg-[#fef9fa] rounded-xl">
                <Shield className="mx-auto text-[#b76e79] mb-2" size={24} />
                <p className="text-sm text-gray-600">Quality Guarantee</p>
              </div>
              <div className="text-center p-4 bg-[#fef9fa] rounded-xl">
                <Package className="mx-auto text-[#b76e79] mb-2" size={24} />
                <p className="text-sm text-gray-600">Fast Delivery</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Details Tabs */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <h3 className="font-['Playfair_Display'] text-gray-900 mb-6">Features</h3>
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#b76e79] mt-2"></div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Specifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <h3 className="font-['Playfair_Display'] text-gray-900 mb-6">Specifications</h3>
            <div className="space-y-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between border-b border-gray-100 pb-3">
                  <span className="text-gray-600">{key}</span>
                  <span className="text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h3 className="font-['Playfair_Display'] text-gray-900 text-center mb-12" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
              Related Products
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link href={`/shop/product/${relatedProduct.slug}`}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-gray-900 mb-2">{relatedProduct.name}</h4>
                      <p className="text-[#b76e79] text-xl">${relatedProduct.price}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
