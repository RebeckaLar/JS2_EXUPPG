import React from 'react';
import { useProducts } from '../contexts/ProductsContext';
import { Link } from 'react-router';

const ProductList = () => {
  const { products, setSelectedProduct, imgSrc, setImgSrc } = useProducts();

  const handleProductClick = (product) => {
    setSelectedProduct(product); //set the selected product in the context
    console.log(product)
  };

  return (
    <div className='product-list flex-col'>
      <div className='flex p-11 justify-center bg-gray-200'>
        <h1 className='text-[3rem]'>Products</h1>
      </div>
            {
        products.map((product) => (
          <div 
          className='flex-auto'
          key={product._id} 
          src={imgSrc[0]}
          onClick={() => handleProductClick(product)}>
            <Link 
              to={`/productList/${product._id}`}>{(product.name + ' ' + product.price) }
            </Link>
          </div>
        ))
      }
    </div>
  );
};

export default ProductList;
