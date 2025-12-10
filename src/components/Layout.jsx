import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUser, FaSignOutAlt, FaHome, FaBox, FaUsersCog } from "react-icons/fa";

const Layout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAdmin = location.pathname.startsWith('/admin');
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const navigation = [
    { name: 'Home', href: '/products', icon: FaHome, current: !isAdmin },
    { name: 'Products', href: '/products', icon: FaBox, current: !isAdmin },
    { name: 'Admin Products', href: '/admin/products', icon: FaBox, current: isAdmin },
    { name: 'Customers', href: '/admin/customers', icon: FaUsersCog, current: isAdmin },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-indigo-600">IRTS</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`${item.current
                      ? 'border-indigo-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                      } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              {token ? (
                <div className="flex items-center space-x-4">
                  <button
                    type="button"
                    className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <FaShoppingCart className="h-6 w-6" />
                  </button>
                  <div className="ml-3 relative">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-700">
                        <FaUser className="inline mr-1" /> Admin
                      </span>
                      <button
                        onClick={handleLogout}
                        className="text-sm text-red-600 hover:text-red-800 flex items-center"
                      >
                        <FaSignOutAlt className="mr-1" /> Logout
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex space-x-4">
                  <Link
                    to="/"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign in
                  </Link>
                  <Link
                    to="/register"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;
