import { useApp } from '../context/AppContext';
import { ProductCard } from '../components/ProductCard';
import { GlassCard, GradientText } from '../components/ui';
import { sampleProducts, featuredCollections } from '../data/products';

export const HomePage = () => {
  const { setCurrentPage } = useApp();
  
  // Get featured products (first 4 products)
  const featuredProducts = sampleProducts.slice(0, 4);
  
  // Get trending products (products with "Hot" or "Trending" tags)
  const trendingProducts = sampleProducts.filter(product => 
    product.tags.includes('Hot') || product.tags.includes('Trending')
  ).slice(0, 6);

  // Get VIP products
  const vipProducts = sampleProducts.filter(product => 
    product.tags.includes('VIP')
  ).slice(0, 3);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-blue-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Hero Section - Creative Grid Layout */}
      <section className="relative min-h-screen pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Creative Grid Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-20">
            {/* Main Title - Spans 7 columns */}
            <div className="lg:col-span-7 space-y-6">
              <div className="relative">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-pulse">
                    LUXE
                  </span>
                  <span className="block text-white text-4xl md:text-6xl lg:text-7xl mt-2 font-light">
                    CREATIVE
                  </span>
                  <span className="block text-yellow-400 text-3xl md:text-5xl lg:text-6xl mt-2 font-medium">
                    STUDIO
                  </span>
                </h1>
                
                {/* Floating Creative Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full animate-bounce" />
                <div className="absolute top-20 -left-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-bounce delay-300" />
                <div className="absolute bottom-0 right-20 w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-bounce delay-700" />
              </div>
            </div>

            {/* Creative Stats - Spans 5 columns */}
            <div className="lg:col-span-5 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <GlassCard className="p-6 text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-yellow-400 mb-2 group-hover:text-orange-400 transition-colors">
                    {sampleProducts.length}
                  </div>
                  <div className="text-gray-400 text-sm">Artistic Pieces</div>
                </GlassCard>
                <GlassCard className="p-6 text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:text-pink-400 transition-colors">
                    {featuredCollections.length}
                  </div>
                  <div className="text-gray-400 text-sm">Creative Collections</div>
                </GlassCard>
              </div>
              
              <GlassCard className="p-6 text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-2">∞</div>
                <div className="text-gray-400 text-sm">Imagination</div>
              </GlassCard>
            </div>
          </div>

          {/* Creative Description */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Where <span className="text-yellow-400 font-semibold">luxury meets creativity</span>, 
              and every piece tells a story of <span className="text-purple-400 font-semibold">artistic vision</span>. 
              Discover a world where <span className="text-cyan-400 font-semibold">innovation</span> and 
              <span className="text-pink-400 font-semibold">craftsmanship</span> collide.
            </p>
          </div>

          {/* Creative CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <button
              onClick={() => setCurrentPage('shop')}
              className="group relative px-8 py-4 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-black rounded-full text-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">Explore Gallery</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="group relative px-8 py-4 border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 overflow-hidden">
              <span className="relative z-10">Join Creative Club</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Creative Collections - Hexagonal Grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-purple-500 to-pink-500">
              Creative Collections
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Each collection is a masterpiece of creative expression and artistic innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCollections.map((collection, index) => (
            <div key={collection.id} className="group relative">
              <GlassCard hover className="p-6 relative overflow-hidden transform transition-all duration-500 hover:rotate-1">
                {/* Creative Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                <div className="absolute inset-[2px] bg-black rounded-xl" />
                
                <div className="relative z-10">
                  <div className="relative mb-4 overflow-hidden rounded-xl">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Floating Creative Badge */}
                    <div className="absolute top-2 right-2">
                      <div className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold rounded-full transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                        #{index + 1}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                    {collection.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">{collection.description}</p>
                  <div className="text-yellow-400 font-semibold">
                    {collection.products.length} Creative Pieces
                  </div>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products - Creative Masonry Layout */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Featured Masterpieces
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Curated pieces that showcase the pinnacle of creative luxury
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <div key={product.id} className={`group transform transition-all duration-500 hover:scale-105 ${index % 2 === 0 ? 'hover:-rotate-1' : 'hover:rotate-1'}`}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => setCurrentPage('shop')}
            className="group relative px-8 py-4 border-2 border-yellow-500 text-yellow-500 rounded-full text-lg font-semibold hover:bg-yellow-500 hover:text-black transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">View All Masterpieces</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </section>

      {/* Trending Now - Creative Carousel Style */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-500 to-orange-500">
              Trending Now
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The creative community's most loved pieces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingProducts.map((product, index) => (
            <div key={product.id} className="group transform transition-all duration-500 hover:scale-105 hover:-rotate-2">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* VIP Exclusive - Creative Showcase */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600">
              VIP Creative Access
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Exclusive pieces for the most discerning creative minds
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vipProducts.map((product, index) => (
            <div key={product.id} className="group relative">
              <GlassCard hover className="p-6 relative overflow-hidden transform transition-all duration-500 hover:scale-105 hover:rotate-1">
                {/* Creative VIP Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="px-3 py-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-black text-xs font-bold rounded-full transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                    VIP CREATIVE
                  </div>
                </div>

                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-400 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-yellow-400">
                    ${product.price}
                  </span>
                  <button className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </section>

      {/* Creative Testimonials */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600">
              Creative Voices
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Hear from the creative community about their LUXE experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Alex Rivera",
              role: "Digital Artist",
              content: "LUXE has transformed my creative process. Every piece inspires new artistic directions.",
              rating: 5,
              color: "from-pink-500 to-purple-600"
            },
            {
              name: "Maya Chen",
              role: "Creative Director",
              content: "The quality and artistic vision of LUXE products is unmatched in the creative industry.",
              rating: 5,
              color: "from-blue-500 to-cyan-600"
            },
            {
              name: "Jordan Kim",
              role: "Visual Designer",
              content: "From concept to creation, LUXE delivers an experience that fuels my artistic soul.",
              rating: 5,
              color: "from-yellow-500 to-orange-600"
            }
          ].map((testimonial, index) => (
            <div key={index} className="group transform transition-all duration-500 hover:scale-105 hover:rotate-1">
              <GlassCard className="p-8 text-center relative overflow-hidden">
                {/* Creative Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl group-hover:text-2xl transition-all duration-300">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic text-lg">"{testimonial.content}"</p>
                  <h4 className="font-semibold text-lg mb-1 text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </section>

      {/* Creative Newsletter */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <GlassCard className="p-12 relative overflow-hidden">
          {/* Creative Background Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-2xl" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-purple-400/20 to-pink-500/20 rounded-full blur-2xl" />
          
          <div className="relative z-10">
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-purple-500 to-pink-500">
                Join the Creative Revolution
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Get inspired with exclusive creative insights, new collections, and artistic discoveries
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your creative email"
                className="flex-1 px-6 py-4 bg-white bg-opacity-10 border border-gray-600 rounded-full focus:outline-none focus:border-yellow-400 text-lg"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-black rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                Get Inspired
              </button>
            </div>
          </div>
        </GlassCard>
      </section>
    </div>
  );
};
