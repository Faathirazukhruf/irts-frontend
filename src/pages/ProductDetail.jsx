import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaStar, FaArrowLeft } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Simulate API call to fetch product details
    const fetchProduct = async () => {
      try {
        // In a real app, you would fetch from your API
        // const response = await fetch(`/api/products/${id}`);
        // const data = await response.json();
        
        // Mock data - replace with actual API call
        const mockProduct = {
          id: id,
          name: 'Premium Quality T-Shirt',
          price: 29.99,
          originalPrice: 49.99,
          description: 'High-quality cotton t-shirt with a comfortable fit. Perfect for casual wear.',
          rating: 4.5,
          reviewCount: 128,
          inStock: true,
          images: [
            'https://via.placeholder.com/600x800?text=Product+Image+1',
            'https://via.placeholder.com/600x800?text=Product+Image+2',
            'https://via.placeholder.com/600x800?text=Product+Image+3',
          ],
          sizes: ['S', 'M', 'L', 'XL', 'XXL'],
          colors: ['Black', 'White', 'Navy', 'Gray'],
          details: [
            '100% Cotton',
            'Machine washable',
            'Pre-shrunk fabric',
            'Ribbed collar',
            'Taped neck and shoulders',
            'Double-stitched sleeves and bottom hem'
          ]
        };
        
        setProduct(mockProduct);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        toast.error('Failed to load product details');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    // Add to cart logic here
    toast.success('Added to cart!');
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast.info(isFavorite ? 'Removed from favorites' : 'Added to favorites!');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <button 
          onClick={() => navigate('/')} 
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Back to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center text-gray-600 hover:text-blue-600 mb-6"
      >
        <FaArrowLeft className="mr-2" /> Back to Products
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg overflow-hidden border">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name} 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-16 h-16 border rounded ${
                  selectedImage === index ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <img 
                  src={img} 
                  alt={`Thumbnail ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <FaStar 
                  key={i} 
                  className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'} 
                />
              ))}
            </div>
            <span className="text-gray-600 text-sm">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>

          <div className="mb-6">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice > product.price && (
              <span className="ml-2 text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
            {product.originalPrice > product.price && (
              <span className="ml-2 text-red-600 font-medium">
                {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
              </span>
            )}
          </div>

          <p className="text-gray-700 mb-6">{product.description}</p>

          {/* Size Selection */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Size</h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 border rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Color</h3>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className="w-8 h-8 rounded-full border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ backgroundColor: color.toLowerCase() }}
                  title={color}
                />
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
              Quantity
            </label>
            <div className="flex items-center">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 border rounded-l-md bg-gray-100 hover:bg-gray-200"
              >
                -
              </button>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-16 text-center border-t border-b border-gray-300 py-1"
              />
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 border rounded-r-md bg-gray-100 hover:bg-gray-200"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <FaShoppingCart className="mr-2" />
              Add to Cart
            </button>
            <button
              onClick={toggleFavorite}
              className="p-3 border rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            >
              <FaHeart className={`text-xl ${isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'}`} />
            </button>
          </div>

          {/* Stock Status */}
          <div className="mt-4">
            {product.inStock ? (
              <p className="text-green-600 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                In Stock
              </p>
            ) : (
              <p className="text-red-600">Out of Stock</p>
            )}
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-12">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button className="py-4 px-6 border-b-2 border-blue-500 text-sm font-medium text-blue-600">
              Product Details
            </button>
            <button className="py-4 px-6 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
              Reviews ({product.reviewCount})
            </button>
            <button className="py-4 px-6 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
              Shipping & Returns
            </button>
          </nav>
        </div>

        <div className="py-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Product Details</h3>
          <ul className="list-disc pl-5 space-y-2">
            {product.details.map((detail, index) => (
              <li key={index} className="text-gray-600">{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
