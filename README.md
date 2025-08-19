# LUXE - Premium E-commerce React App

A modern, luxury-focused e-commerce platform built with React, featuring a beautiful UI with Tailwind CSS and smooth animations.

## 🚀 Features

- **Modern React Architecture**: Built with React 18, hooks, and context API
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component-Based Structure**: Reusable components for maintainability
- **State Management**: Context API for global state (cart, wishlist, navigation)
- **Interactive UI**: Smooth animations, hover effects, and transitions
- **Product Management**: Product cards, search, filtering, and detailed views
- **Shopping Cart**: Full cart functionality with quantity management
- **Wishlist**: Save and manage favorite products
- **Responsive Navigation**: Mobile-friendly navigation with hamburger menu

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── icons/          # SVG icon components
│   │   ├── index.jsx   # Icon exports
│   │   ├── SearchIcon.jsx
│   │   ├── HeartIcon.jsx
│   │   ├── ShoppingBagIcon.jsx
│   │   ├── MenuIcon.jsx
│   │   ├── XIcon.jsx
│   │   └── StarIcon.jsx
│   ├── ui/             # Utility UI components
│   │   ├── index.js    # UI component exports
│   │   ├── GlassCard.jsx
│   │   └── GradientText.jsx
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Site footer
│   ├── ProductCard.jsx # Product display card
│   └── CartDrawer.jsx  # Shopping cart sidebar
├── context/            # React context for state management
│   └── AppContext.jsx  # Global app state
├── data/               # Static data and constants
│   └── products.js     # Sample product data
├── pages/              # Page components
│   ├── HomePage.jsx    # Landing page
│   ├── ShopPage.jsx    # Product catalog
│   ├── ProductDetailPage.jsx # Individual product view
│   ├── AboutPage.jsx   # Company information
│   └── ContactPage.jsx # Contact form
├── App.jsx             # Main app component
├── main.jsx            # React entry point
└── index.css           # Global styles and Tailwind imports
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Icons**: Custom SVG components
- **Development**: ESLint, PostCSS, Autoprefixer

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd luxe-ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors
The app uses a custom color palette defined in `tailwind.config.js`:
- **Gold**: #D4AF37
- **Ivory**: #FFFFF0  
- **Charcoal**: #36454F

### Styling
- **Glass Effect**: Backdrop blur with semi-transparent backgrounds
- **Gradient Text**: Gold-to-ivory gradient text effects
- **Hover Animations**: Smooth lift effects on interactive elements
- **Responsive Grid**: Mobile-first responsive design

## 🔧 Component Usage

### ProductCard
```jsx
import { ProductCard } from './components/ProductCard';

<ProductCard product={productData} />
```

### GlassCard
```jsx
import { GlassCard } from './components/ui';

<GlassCard hover className="p-6">
  Content here
</GlassCard>
```

### GradientText
```jsx
import { GradientText } from './components/ui';

<GradientText>Luxury Text</GradientText>
```

## 📱 Responsive Design

- **Mobile**: Single column layout with collapsible navigation
- **Tablet**: Two-column grid for products
- **Desktop**: Full four-column grid with enhanced navigation

## 🎯 Key Features

1. **Navigation**: Smooth page transitions with state management
2. **Product Display**: Interactive product cards with quick view
3. **Shopping Cart**: Persistent cart with quantity management
4. **Wishlist**: Save favorite products
5. **Search & Filter**: Product search and sorting
6. **Responsive**: Mobile-optimized experience

## 🚀 Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🎉 Acknowledgments

- Built with modern React best practices
- Styled with Tailwind CSS for rapid development
- Icons designed for optimal user experience
- Responsive design for all device sizes
