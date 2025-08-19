import { useEffect, useRef, useCallback } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

const AppContent = () => {
  const { currentPage } = useApp();
  const cursorRef = useRef(null);
  const trailRefs = useRef([]);
  const particlesRef = useRef([]);
  const animationFrameRef = useRef(null);

  // Throttle function for better performance
  const throttle = useCallback((func, limit) => {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  }, []);

  useEffect(() => {
    // Enhanced cursor effects
    const cursor = document.getElementById('cursor-glow');
    const trailContainer = document.getElementById('cursor-trail');
    
    if (!cursor || !trailContainer) return;

    // Create trail dots
    const trailDots = [];
    for (let i = 0; i < 5; i++) {
      const dot = document.createElement('div');
      dot.className = 'cursor-trail-dot';
      dot.style.animationDelay = `${i * 0.1}s`;
      trailContainer.appendChild(dot);
      trailDots.push(dot);
    }
    trailRefs.current = trailDots;

    // Create particle system
    const particles = [];
    for (let i = 0; i < 15; i++) {
      const particle = document.createElement('div');
      particle.className = 'cursor-particle';
      particle.style.left = Math.random() * window.innerWidth + 'px';
      particle.style.top = Math.random() * window.innerHeight + 'px';
      particle.style.animationDelay = Math.random() * 5 + 's';
      trailContainer.appendChild(particle);
      particles.push(particle);
    }
    particlesRef.current = particles;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let trailX = 0;
    let trailY = 0;

    const handleMouseMove = throttle((e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Check if hovering over interactive elements
      const target = e.target;
      const isInteractive = target.tagName === 'BUTTON' || 
                           target.tagName === 'A' || 
                           target.closest('button') || 
                           target.closest('a') ||
                           target.closest('.group');

      // Magnetic effect for buttons
      if (target.tagName === 'BUTTON' || target.closest('button')) {
        const rect = target.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.sqrt((mouseX - centerX) ** 2 + (mouseY - centerY) ** 2);
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          mouseX += (centerX - mouseX) * force * 0.1;
          mouseY += (centerY - mouseY) * force * 0.1;
        }
      }

      if (isInteractive) {
        cursor.style.transform = 'scale(1.5) rotate(45deg)';
        cursor.style.background = 'radial-gradient(circle, rgba(212, 175, 55, 0.8) 0%, rgba(255, 255, 240, 0.6) 50%, transparent 70%)';
        cursor.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.8)';
        
        // Add sparkle effect (reduced frequency for performance)
        if (Math.random() < 0.05) {
          createSparkle(mouseX, mouseY);
        }
      } else {
        cursor.style.transform = 'scale(1) rotate(0deg)';
        cursor.style.background = 'radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%)';
        cursor.style.boxShadow = '0 0 10px rgba(212, 175, 55, 0.3)';
      }
    }, 16); // 60fps throttling

    const createSparkle = (x, y) => {
      const sparkle = document.createElement('div');
      sparkle.className = 'cursor-sparkle';
      sparkle.style.left = x + 'px';
      sparkle.style.top = y + 'px';
      trailContainer.appendChild(sparkle);
      
      setTimeout(() => {
        if (sparkle.parentNode) {
          sparkle.remove();
        }
      }, 1000);
    };

    const animateCursor = () => {
      // Smooth cursor movement
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;
      
      cursor.style.left = cursorX - 10 + 'px';
      cursor.style.top = cursorY - 10 + 'px';

      // Trail effect
      trailX += (cursorX - trailX) * 0.15;
      trailY += (cursorY - trailY) * 0.15;

      trailDots.forEach((dot, index) => {
        const delay = index * 0.05;
        const x = trailX - 10 + (mouseX - trailX) * delay;
        const y = trailY - 10 + (mouseY - trailY) * delay;
        
        dot.style.left = x + 'px';
        dot.style.top = y + 'px';
        dot.style.opacity = 1 - (index * 0.2);
        dot.style.transform = `scale(${1 - (index * 0.1)})`;
      });

      // Animate particles (optimized)
      particles.forEach((particle, index) => {
        const time = Date.now() * 0.001 + index;
        const x = parseFloat(particle.style.left) + Math.sin(time) * 0.5;
        const y = parseFloat(particle.style.top) + Math.cos(time) * 0.5;
        
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        
        // Attract particles to cursor when close
        const distance = Math.sqrt((x - mouseX) ** 2 + (y - mouseY) ** 2);
        if (distance < 150) {
          const force = (150 - distance) / 150;
          particle.style.transform = `scale(${1 + force * 0.5})`;
          particle.style.opacity = 0.8 + force * 0.2;
        } else {
          particle.style.transform = 'scale(1)';
          particle.style.opacity = 0.3;
        }
      });

      animationFrameRef.current = requestAnimationFrame(animateCursor);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animateCursor();

    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      // Clean up trail dots and particles
      trailDots.forEach(dot => {
        if (dot.parentNode) dot.remove();
      });
      particles.forEach(particle => {
        if (particle.parentNode) particle.remove();
      });
    };
  }, [throttle]);

  const renderPage = () => {
    if (currentPage.startsWith('product-')) {
      const productId = parseInt(currentPage.split('-')[1]);
      return <ProductDetailPage productId={productId} />;
    }
    
    switch (currentPage) {
      case 'shop': return <ShopPage />;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {renderPage()}
      <Footer />
      <CartDrawer />
      <div className="cursor-glow" id="cursor-glow"></div>
      <div className="cursor-trail" id="cursor-trail"></div>
    </div>
  );
};

const App = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;
