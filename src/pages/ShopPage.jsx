import { useState, useEffect } from 'react';
import { ProductCard } from '../components/ProductCard';
import { SearchIcon } from '../components/icons';
import { GradientText, GlassCard } from '../components/ui';
import { sampleProducts, productCategories, featuredCollections } from '../data/products';

export const ShopPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  useEffect(() => {
    let filtered = sampleProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        case 'reviews': return b.reviews - a.reviews;
        case 'newest': return b.id - a.id;
        default: return a.name.localeCompare(b.name);
      }
    });

    setFilteredProducts(filtered);
  }, [searchTerm, sortBy, selectedCategory]);

  const getProductCountByCategory = (category) => {
    if (category === 'All') return sampleProducts.length;
    return sampleProducts.filter(p => p.category === category).length;
  };

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          <GradientText>Luxury Collection</GradientText>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Discover our curated collection of premium goods, crafted for those who appreciate the finest things in life.
        </p>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <GlassCard className="p-6 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">{sampleProducts.length}</div>
            <div className="text-gray-400">Total Products</div>
          </GlassCard>
          <GlassCard className="p-6 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">{productCategories.length - 1}</div>
            <div className="text-gray-400">Categories</div>
          </GlassCard>
          <GlassCard className="p-6 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">98%</div>
            <div className="text-gray-400">Satisfaction</div>
          </GlassCard>
          <GlassCard className="p-6 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
            <div className="text-gray-400">Support</div>
          </GlassCard>
        </div>
      </div>

      {/* Featured Collections */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <GradientText>Featured Collections</GradientText>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCollections.map((collection) => (
            <GlassCard key={collection.id} hover className="p-6 text-center cursor-pointer group">
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{collection.name}</h3>
              <p className="text-gray-400 text-sm">{collection.description}</p>
              <div className="mt-4 text-yellow-400 text-sm">
                {collection.products.length} Products
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mb-12">
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search products, descriptions, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white bg-opacity-10 border border-gray-600 rounded-2xl focus:outline-none focus:border-yellow-400 text-lg"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <SearchIcon />
            </div>
          </div>

          {/* Sort Options */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-6 py-4 bg-white bg-opacity-10 border border-gray-600 rounded-2xl focus:outline-none focus:border-yellow-400 text-lg min-w-[200px]"
          >
            <option value="name">Sort by Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="reviews">Most Reviewed</option>
            <option value="newest">Newest First</option>
          </select>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-3 rounded-xl transition-all duration-200 ${
                viewMode === 'grid' 
                  ? 'bg-yellow-500 text-black' 
                  : 'bg-white bg-opacity-10 text-gray-400 hover:bg-opacity-20'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-3 rounded-xl transition-all duration-200 ${
                viewMode === 'list' 
                  ? 'bg-yellow-500 text-black' 
                  : 'bg-white bg-opacity-10 text-gray-400 hover:bg-opacity-20'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3">
          {productCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-yellow-500 text-black'
                  : 'bg-white bg-opacity-10 text-gray-300 hover:bg-opacity-20'
              }`}
            >
              {category} ({getProductCountByCategory(category)})
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-8 text-center">
        <p className="text-gray-400">
          Showing {filteredProducts.length} of {sampleProducts.length} products
          {searchTerm && ` for "${searchTerm}"`}
          {selectedCategory !== 'All' && ` in ${selectedCategory}`}
        </p>
      </div>

      {/* Products Grid/List */}
      <div className={`${
        viewMode === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'
          : 'space-y-6'
      }`}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* No Results */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold mb-4">No products found</h3>
          <p className="text-xl text-gray-400 mb-8">
            Try adjusting your search terms or category filters
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All');
            }}
            className="px-6 py-3 bg-yellow-500 text-black rounded-xl font-semibold hover:bg-yellow-600 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};
