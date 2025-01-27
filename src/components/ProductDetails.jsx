import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useProducts } from '../contexts/ProductsContext'; //Data hämtas från contexten, ingen data fångas här inne

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
    <div className='product-details border'>
      <h1>{selectedProduct.name}</h1>
      <div>
        {<img src={imgSrc[0]}></img>}
        {<img src={imgSrc[1]}></img>}
        {<img src={imgSrc[2]}></img>}
        {<img src={imgSrc[3]}></img>}
      </div>
      <p>{selectedProduct.description}</p>
      <p>Price: ${selectedProduct.price}</p>
    </div>
  );
};

export default ProductDetails;
