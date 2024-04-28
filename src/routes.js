import ProductComponents from "./components/ProductComponents";
import ProductDetails from "./components/ProductDetails";
import ProductListing from "./components/ProductListing";

export const routes = [
  { path: "/", element: <ProductListing /> },
  {
    path: "/productdetails/:productid",
    element: <ProductDetails />,
  },
];
