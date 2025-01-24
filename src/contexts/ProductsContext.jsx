// ProductContext.js
import React, { createContext, useState, useContext, useEffect } from "react";

// Create the context
const ProductsContext = createContext();

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

  useEffect(() => {
    if (products.length > 0) {
      const savedProduct = localStorage.getItem('selectedProduct');
      if (savedProduct) {
        const parsedProduct = JSON.parse(savedProduct);
        // Ensure the product exists in the current products list
        const productExists = products.some((prod) => prod.id === parsedProduct.id);
        if (productExists) {
          setSelectedProduct(parsedProduct);
        }
      }
    }
  }, [products]); // Only run this effect when products are loaded

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