import React from 'react';
import { useProducts } from '../contexts/ProductsContext';
import { Link } from 'react-router';

const ProductList = () => {
  const { products, setSelectedProduct } = useProducts();

  const handleProductClick = (product) => {
    setSelectedProduct(product); //set the selected product in the context
    console.log(product)
  };

  return (
    <div className='product-list flex-col container'>
      <h1>Product List</h1>
            {
        products.map((product) => (
          <div 
          className='flex-auto'
          key={product._id} 
          onClick={() => handleProductClick(product)}>
            <Link 
              to={`/productList/${product._id}`}>{(product.name + ' ' + product.price + product.images[0])}
            </Link>
          </div>
        ))
      }
    </div>
  );
};

export default ProductList;
