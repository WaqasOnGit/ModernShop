import { GlassCard, GradientText } from '../components/ui';

export const AboutPage = () => (
  <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">
        <GradientText>About LUXE</GradientText>
      </h1>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        We believe luxury is not just about owning beautiful things, but about experiencing the extraordinary in every moment.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
      <div>
        <GlassCard className="p-8">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Founded in 2020, LUXE emerged from a simple belief: that luxury should be accessible to those who appreciate true craftsmanship and timeless design. Our journey began with a curated selection of handpicked items from the world's finest artisans.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Today, we continue to uphold our commitment to excellence, offering only the most exceptional products that meet our rigorous standards of quality, beauty, and functionality.
          </p>
        </GlassCard>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
          alt="Luxury craftsmanship"
          className="w-full h-80 object-cover rounded-2xl"
        />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { title: "Quality", icon: "💎", description: "Every product is carefully selected and tested to meet our exacting standards." },
        { title: "Craftsmanship", icon: "🎨", description: "We partner with master artisans who bring decades of experience to their craft." },
        { title: "Service", icon: "👑", description: "Our concierge team provides personalized service to ensure your complete satisfaction." }
      ].map((value) => (
        <GlassCard key={value.title} className="p-8 text-center h-full">
          <div className="text-4xl mb-4">{value.icon}</div>
          <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
          <p className="text-gray-400">{value.description}</p>
        </GlassCard>
      ))}
    </div>
  </div>
);
