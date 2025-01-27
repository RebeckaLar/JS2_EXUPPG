import React, { createContext, useState, useContext, useEffect } from "react";

export const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [productId, setProductId] = useState()
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(); //to store current.sel.prod. when clicked, to updated sel.prod
  const [imgSrc, setImgSrc] = useState('')

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://js2-ecommerce-api.vercel.app/api/products");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const values = {
    productId,
    setProductId,
    products,
    selectedProduct,
    setSelectedProduct,
    imgSrc,
    setImgSrc
  }

  return (
    <ProductsContext.Provider value={values}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider

export const useProducts = () => {
  const context = useContext(ProductsContext);

  if(!context) throw new Error('useProducts must be called inside a PostsContextProvider')

    return context
};