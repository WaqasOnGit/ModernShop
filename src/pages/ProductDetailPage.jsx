import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { HeartIcon, StarIcon } from '../components/icons';
import { GlassCard } from '../components/ui/GlassCard';
import { sampleProducts } from '../data/products';

export const ProductDetailPage = ({ productId }) => {
  const product = sampleProducts.find(p => p.id === productId) || sampleProducts[0];
  const { addToCart, toggleWishlist, isInWishlist } = useApp();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const productImages = [
    product.image,
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&h=600&fit=crop"
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Gallery */}
        <div className="space-y-4">
          <GlassCard className="p-4">
            <img
              src={productImages[selectedImage]}
              alt={product.name}
              className="w-full h-96 object-cover rounded-xl"
            />
          </GlassCard>
          <div className="flex gap-4">
            {productImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                  selectedImage === index ? 'border-yellow-400' : 'border-gray-600'
                }`}
              >
                <img src={image} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <div className="flex gap-2 mb-4">
              {product.tags?.map(tag => (
                <span key={tag} className="px-3 py-1 text-sm bg-yellow-500 bg-opacity-20 text-yellow-400 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} filled={i < product.rating} />
                ))}
              </div>
              <span className="text-gray-400">({product.reviews} reviews)</span>
            </div>
            <p className="text-3xl font-bold text-yellow-400 mb-6">${product.price}</p>
            <p className="text-gray-300 text-lg leading-relaxed">{product.description}</p>
          </div>

          {/* Quantity and Actions */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-lg font-medium">Quantity:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center"
                >
                  -
                </button>
                <span className="w-12 text-center text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => addToCart(product, quantity)}
                className="flex-1 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-2xl font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                Add to Cart
              </button>
              <button
                onClick={() => toggleWishlist(product)}
                className={`px-6 py-4 rounded-2xl border-2 transition-all duration-300 ${
                  isInWishlist(product.id)
                    ? 'border-yellow-400 bg-yellow-400 text-black'
                    : 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black'
                }`}
              >
                <HeartIcon filled={isInWishlist(product.id)} />
              </button>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-700">
            <div className="text-center">
              <div className="text-2xl mb-2">🛡️</div>
              <p className="text-sm text-gray-400">Lifetime Warranty</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">⚡</div>
              <p className="text-sm text-gray-400">Express Shipping</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">↩️</div>
              <p className="text-sm text-gray-400">Easy Returns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
