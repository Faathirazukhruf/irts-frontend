import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaArrowRight, FaStar, FaShoppingCart, FaHeart } from 'react-icons/fa';

// Mock data for featured products
const featuredProducts = [
  {
    id: 1,
    name: 'Premium Cotton T-Shirt',
    price: 29.99,
    originalPrice: 49.99,
    rating: 4.5,
    reviewCount: 128,
    image: 'https://via.placeholder.com/300x400?text=Premium+T-Shirt',
    category: 'Clothing',
    isNew: true,
  },
  {
    id: 2,
    name: 'Wireless Headphones',
    price: 99.99,
    originalPrice: 149.99,
    rating: 4.8,
    reviewCount: 256,
    image: 'https://via.placeholder.com/300x400?text=Wireless+Headphones',
    category: 'Electronics',
    isNew: true,
  },
  {
    id: 3,
    name: 'Running Shoes',
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.7,
    reviewCount: 312,
    image: 'https://via.placeholder.com/300x400?text=Running+Shoes',
    category: 'Footwear',
    isNew: false,
  },
  {
    id: 4,
    name: 'Smart Watch',
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.6,
    reviewCount: 189,
    image: 'https://via.placeholder.com/300x400?text=Smart+Watch',
    category: 'Electronics',
    isNew: true,
  },
];

// Categories data
const categories = [
  { name: 'Electronics', count: 24, image: 'https://via.placeholder.com/200x150?text=Electronics' },
  { name: 'Clothing', count: 36, image: 'https://via.placeholder.com/200x150?text=Clothing' },
  { name: 'Home & Living', count: 18, image: 'https://via.placeholder.com/200x150?text=Home+Living' },
  { name: 'Beauty', count: 29, image: 'https://via.placeholder.com/200x150?text=Beauty' },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState('featured');
  const [isFavorite, setIsFavorite] = useState({});

  const toggleFavorite = (productId) => {
    setIsFavorite(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">Welcome to</span>
                  <span className="block text-yellow-300">IRTS Shop</span>
                </h1>
                <p className="mt-3 text-base text-blue-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Discover amazing products at the best prices. Shop the latest trends in fashion, electronics, home goods, and more.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/products"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-yellow-400 hover:bg-yellow-500 md:py-4 md:text-lg md:px-10"
                    >
                      Shop Now
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to="/about"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-yellow-300 bg-blue-700 hover:bg-blue-800 md:py-4 md:text-lg md:px-10"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Fashion collection"
          />
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Shop by Category</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Browse our wide range of product categories
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/products?category=${category.name.toLowerCase()}`}
              className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="aspect-w-3 aspect-h-2 bg-gray-200 group-hover:opacity-75">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {category.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{category.count} items</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-extrabold text-gray-900">Featured Products</h2>
            <div className="flex space-x-2">
              {['featured', 'new', 'bestsellers', 'sale'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    activeTab === tab
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group relative">
                <div className="relative w-full h-72 rounded-lg overflow-hidden bg-white">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-center object-cover"
                  />
                  {product.isNew && (
                    <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-800 text-xs font-bold px-2 py-1 rounded-full">
                      NEW
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button className="bg-white rounded-full p-2 text-gray-800 hover:bg-gray-200 transition-colors duration-200 mr-2">
                      <FaShoppingCart className="h-5 w-5" />
                    </button>
                    <button 
                      className={`rounded-full p-2 transition-colors duration-200 ${isFavorite[product.id] ? 'text-red-500' : 'text-gray-800 bg-white hover:bg-gray-200'}`}
                      onClick={() => toggleFavorite(product.id)}
                    >
                      <FaHeart className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-sm text-gray-700">
                    <Link to={`/products/${product.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="ml-1 text-xs text-gray-500">({product.reviewCount})</span>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm font-medium text-gray-900">${product.price.toFixed(2)}</p>
                    {product.originalPrice > product.price && (
                      <p className="text-xs text-gray-500 line-through">${product.originalPrice.toFixed(2)}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              View All Products
              <FaArrowRight className="ml-2 -mr-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Promo Banner */}
      <div className="bg-blue-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-blue-200">Start shopping today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/register"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Create an account
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 bg-opacity-60 hover:bg-opacity-70"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
