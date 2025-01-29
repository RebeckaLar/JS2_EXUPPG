import React from 'react';
import { useProducts } from '../contexts/ProductsContext';
import { Link } from 'react-router';

const ProductList = () => {
  const { products, setSelectedProduct, imgSrc, setImgSrc } = useProducts();

  const handleProductClick = (product) => {
    setSelectedProduct(product); //set the selected product in the context
    setImgSrc(product.images);
    console.log(product)
  };

  return (
    <div className='flex product-list flex-col'>
      <div className='flex p-11 justify-center bg-gray-200'>
        <h1 className='text-[3rem]'>Products</h1>
      </div>
      <div className='bg-slate-100 px-4'>
      {
        products.map((product) => (
            <div 
            className='mt-4 bg-white'
            key={product._id} 
            onClick={() => handleProductClick(product)}>
              <Link 
              className='bg-white'
              to={`/productList/${product._id}`}>
                {<p className='text-xl'>{(product.name)}</p>}
                {<p>{(product.price) + ' kr'}</p>}
                {<div>
                  <img className='img501' src={product.images[0]}/>
                </div>}
              </Link>
            </div>   
        ))
      }
      </div>
    </div>
  );
};

export default ProductList;
