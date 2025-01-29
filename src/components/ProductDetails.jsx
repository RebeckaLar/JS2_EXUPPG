import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useProducts } from '../contexts/ProductsContext'; //Data hämtas från contexten, ingen data fångas här inne
// import { MdOutlineAddShoppingCart } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";


const ProductDetails = () => {
  const { productId } = useParams()
  const { products } = useProducts()
  const { setProductId } = useProducts()
  const { selectedProduct } = useProducts()
  const { setSelectedProduct } = useProducts()
  const { imgSrc } = useProducts()
  const { setImgSrc } = useProducts()


useEffect(() => {
    setProductId(productId)
    const fetchProduct = async() => {
        try {
            const res = await fetch (`https://js2-ecommerce-api.vercel.app/api/products/${productId}`)
            const data = await res.json()
            setSelectedProduct(data)
            setImgSrc(data.images)
        }
        catch(err) {
            throw new Error('Could not find product')
        }
    };
    fetchProduct()
}, []);

  if (!selectedProduct) return <div>Loading...</div>;

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
          <button className='flex gap-2 btn mt-3'>Add to Cart <MdAddShoppingCart /></button>
          <p className='mt-5'>Category: {selectedProduct.category}, </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
