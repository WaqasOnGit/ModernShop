import { useApp } from '../context/AppContext';
import { HeartIcon, StarIcon } from './icons';
import { GlassCard } from './ui/GlassCard';

export const ProductCard = ({ product }) => {
  const { addToCart, toggleWishlist, isInWishlist, setCurrentPage } = useApp();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const calculateDiscountedPrice = (price, discount) => {
    return price - (price * discount / 100);
  };

  return (
    <div className="group">
      <GlassCard hover className="p-6 relative overflow-hidden">
        {/* Product Tags */}
        <div className="absolute top-4 left-4 z-10 flex gap-2">
          {product.tags?.map(tag => (
            <span key={tag} className="px-2 py-1 text-xs bg-yellow-500 bg-opacity-20 text-yellow-400 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Discount Badge */}
        {product.discount > 0 && (
          <div className="absolute top-4 right-4 z-10">
            <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold transform rotate-12">
              -{product.discount}%
            </div>
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black bg-opacity-20 hover:bg-opacity-40 transition-colors"
          style={{ right: product.discount > 0 ? '4rem' : '1rem' }}
        >
          <HeartIcon filled={isInWishlist(product.id)} />
        </button>

        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute top-16 left-4 z-10">
            <span className="px-3 py-1 text-xs bg-red-500 bg-opacity-20 text-red-400 rounded-full border border-red-500">
              Out of Stock
            </span>
          </div>
        )}

        {/* Product Image */}
        <div className="relative mb-4 overflow-hidden rounded-xl">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Category Badge */}
          <div className="absolute top-2 left-2">
            <span className="px-2 py-1 text-xs bg-white bg-opacity-20 text-white rounded-full backdrop-blur-sm">
              {product.category}
            </span>
          </div>
          
          {/* Quick View Button */}
          <button
            onClick={() => setCurrentPage(`product-${product.id}`)}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 px-4 py-2 bg-yellow-500 text-black rounded-full text-sm font-medium"
          >
            Quick View
          </button>
        </div>

        {/* Product Info */}
        <div className="space-y-3">
          <h3 className="font-semibold text-lg group-hover:text-yellow-400 transition-colors">
            {product.name}
          </h3>
          
          {/* Rating and Reviews */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} filled={i < product.rating} />
            ))}
            <span className="text-sm text-gray-400 ml-2">({product.reviews})</span>
          </div>

          {/* Price Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {product.discount > 0 ? (
                <>
                  <span className="text-2xl font-bold text-yellow-400">
                    {formatPrice(calculateDiscountedPrice(product.price, product.discount))}
                  </span>
                  <span className="text-lg text-gray-400 line-through">
                    {formatPrice(product.price)}
                  </span>
                </>
              ) : (
                <span className="text-2xl font-bold text-yellow-400">
                  {formatPrice(product.price)}
                </span>
              )}
            </div>
            
            {/* Add to Cart Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (product.inStock) {
                  addToCart(product);
                }
              }}
              disabled={!product.inStock}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                product.inStock
                  ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black hover:shadow-lg hover:scale-105'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
            >
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>

          {/* Product Description Preview */}
          <p className="text-sm text-gray-400 line-clamp-2">
            {product.description}
          </p>
        </div>
      </GlassCard>
    </div>
  );
};
