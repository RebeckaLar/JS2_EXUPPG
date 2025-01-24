import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useProducts } from '../contexts/ProductsContext'; //Data hämtas från contexten, ingen data fångas här inne

const ProductDetails = () => {
  const { id } = useParams(); // Get the product id from the URL
  const { products, selectedProduct, setSelectedProduct } = useProducts();

  useEffect(() => {
    const product = products.find((prod) => prod.id === parseInt(id));
    setSelectedProduct(product);
  }, [id, products, setSelectedProduct]);

  if (!selectedProduct) return <div>Loading...</div>;

  return (
    <div>
      <h1>{selectedProduct.name}</h1>
      <img src={selectedProduct.image} alt={selectedProduct.name} />
      <p>{selectedProduct.description}</p>
      <p>Price: ${selectedProduct.price}</p>
    </div>
  );
};

export default ProductDetails;
