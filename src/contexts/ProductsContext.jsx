// ProductContext.js
import React, { createContext, useState, useContext, useEffect } from "react";

// Create the context
export const ProductsContext = createContext();

// Context provider component
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]); //products to store fetched prodcut data
  const [selectedProduct, setSelectedProduct] = useState(null); //to store current.sel.prod. when clicked, to updated sel.prod

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://js2-ecommerce-api.vercel.app/api/products");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, selectedProduct, setSelectedProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider

// Custom hook to use the context
export const useProducts = () => {
  return useContext(ProductsContext);
};