import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useProducts } from '../contexts/ProductsContext'; 
import { useCart } from '../contexts/CartContextProvider';
//Data hämtas från contexten
import { MdAddShoppingCart } from "react-icons/md";


const ProductDetails = () => {
  const { productId } = useParams() 
  //hämtar enskild produkt utan context, då endast denna sida kommer titta på produktdetaljerna
  const { products } = useProducts()
  const { setProductId } = useProducts()
  const { selectedProduct } = useProducts()
  const { setSelectedProduct } = useProducts()
  const { imgSrc } = useProducts()
  const { setImgSrc } = useProducts()
  const { addToCart } = useCart()


useEffect(() => {
    setProductId(productId)
    const fetchProduct = async() => {
        try {
            const res = await fetch (`https://js2-ecommerce-api.vercel.app/api/products/${productId}`)
            const data = await res.json()
            setSelectedProduct(data) //uppdaterar produktdetaljer till produkten användaren klickade på
            setImgSrc(data.images) //uppdaterar produktbilderna
        }
        catch(err) {
            throw new Error('Could not find product')
        }
    };
    fetchProduct()
}, []);

  if (!selectedProduct) return <div>Loading...</div>;
  //om valda produkten inte hunnit uppdateras, visa Loading-text

  
  const handleCartClick = (selectedProduct) => {
    console.log(selectedProduct)
    addToCart(selectedProduct)
  };

  return (
    <div className='flex center justify-center'>
      <div className='flex gap-3 max-w-5xl'>
        <div className='rightDetails'>
          {<img className='img501' src={imgSrc[0]}></img>}
          <div className='flex img120'>
              {<img src={imgSrc[0]}></img>}
              {<img src={imgSrc[1]}></img>}
              {<img src={imgSrc[2]}></img>}
              {<img src={imgSrc[3]}></img>}
            </div>
          </div>
        <div className='leftDetails'>
          <h1 className='mt-2'>{selectedProduct.name}</h1>
          <p className='mt-1'>{selectedProduct.description}</p>
          <hr className="my-8 h-0.5 border-t-0 bg-neutral-300 dark:bg-gray/5" />
          <p>Price: ${selectedProduct.price}</p>
          <button 
            className='flex gap-2 btn mt-3'
            onClick={() => handleCartClick(selectedProduct)}>
            Add to Cart 
            <MdAddShoppingCart />
            </button>
          <p className='m-5'>Category: {selectedProduct.category}, </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
