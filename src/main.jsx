import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import AdminProducts from "./pages/AdminProducts";
import AdminCustomers from "./pages/AdminCustomers";

// Check if user is authenticated
const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/" replace />;
  }
  return <Layout>{children}</Layout>;
};

// Admin Route Component
const AdminRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/" replace />;
  }
  // Add admin role check here if needed
  return <Layout>{children}</Layout>;
};

const router = createBrowserRouter([
  { 
    path: "/", 
    element: !isAuthenticated() ? <Login /> : <Navigate to="/products" replace /> 
  },
  { 
    path: "/register", 
    element: !isAuthenticated() ? <Register /> : <Navigate to="/products" replace /> 
  },
  { 
    path: "/products", 
    element: (
      <ProtectedRoute>
        <Products />
      </ProtectedRoute>
    ) 
  },
  { 
    path: "/products/:id", 
    element: (
      <ProtectedRoute>
        <ProductDetail />
      </ProtectedRoute>
    ) 
  },
  { 
    path: "/admin/products", 
    element: (
      <AdminRoute>
        <AdminProducts />
      </AdminRoute>
    ) 
  },
  { 
    path: "/admin/customers", 
    element: (
      <AdminRoute>
        <AdminCustomers />
      </AdminRoute>
    ) 
  },
  {
    path: "*",
    element: <Navigate to="/" replace />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
