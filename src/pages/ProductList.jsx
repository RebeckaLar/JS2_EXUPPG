import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from './ProductsContext'; // Import the custom hook

const ProductList = () => {
  const { products, setSelectedProduct } = useProducts();
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    setSelectedProduct(product); // Set the clicked product in the context
    navigate(`/product/${product.id}`); // Navigate to the product detail page
  };

  return (
    <div>
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-item"
            onClick={() => handleProductClick(product)}
          >
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
