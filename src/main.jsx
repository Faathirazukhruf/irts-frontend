import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import AdminProducts from "./pages/AdminProducts.jsx";
import AdminCustomers from "./pages/AdminCustomers.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/products", element: <Products /> },
  { path: "/products/:id", element: <ProductDetail /> },
  { path: "/admin/products", element: <AdminProducts /> },
  { path: "/admin/customers", element: <AdminCustomers /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
