import React from 'react';
import { useNavigate } from 'react-router';
// import { useNavigate } from 'react-router-dom';
import { useProducts } from '../contexts/ProductsContext';
import { Link } from 'react-router';

const ProductList = () => {
  const { products, setSelectedProduct } = useProducts();
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    setSelectedProduct(product); // Set the clicked product in the context
    navigate(`/product/${product.id}`); // Navigate to the product detail page
    console.log(product)
  };

  // console.log(products)

  return (
    // <div>
    //   <h1>Product List</h1>
    //   <div className="product-list">
    //     {products.map((product) => (
    //       <div
    //         key={product.id}
    //         className="product-item"
    //         onClick={() => handleProductClick(product)}
    //       >
    //         <h2>{product.name}</h2>
    //         <img src={product.image} alt={product.name} />
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div>
      <h1>Product List</h1>
            {
        products.map((product) => (
          // <li key={product._id}><Link>{product.name}</Link></li>
          <li 
          key={product._id} 
          onClick={() => handleProductClick(product)}>
            <Link 
              to={`/products/${product._id}`}>{(product.name + product.price)}
            </Link>
          </li>
        ))
      }
    </div>
  );
};

export default ProductList;
