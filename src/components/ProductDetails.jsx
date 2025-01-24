import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useProducts } from '../contexts/ProductsContext'; //Data hämtas från contexten, ingen data fångas här inne

const ProductDetails = () => {
  const { productId } = useParams(); // Get the product productId from the URL
  const { products, selectedProduct, setSelectedProduct } = useProducts();

  useEffect(() => {
    if (!selectedProduct) {
      const product = products.find((prod) => prod.productId === parseInt(productId));

      // If product found, set it and save to localStorage
      if (product) {
        setSelectedProduct(product);
        localStorage.setItem('selectedProduct', JSON.stringify(product));
      } else {
        // If no product found, attempt to load from localStorage
        const savedProduct = localStorage.getItem('selectedProduct');
        if (savedProduct) {
          setSelectedProduct(JSON.parse(savedProduct));
        }
      }
    }
  }, [productId, products, selectedProduct, setSelectedProduct]);
    
  if (!selectedProduct) return <div>Loading...</div>;
//den hinner inte ladda in data i selectedProduct.name
    // // We should set selectedProduct only if it's not already set.
    // useEffect(() => {
    //     if (!selectedProduct) {
    //       const product = products.find((prod) => prod.productId === parseInt(productId));
    //       if (product) {
    //         setSelectedProduct(product);
    //       }
    //     }
    //   }, [productId, products, selectedProduct, setSelectedProduct]);

//   useEffect(() => {
//     const product = products.find((prod) => prod.productId === parseInt(productId));

//     if (!product) {
//         <div>Loading...</div>
//       } else {
//         setSelectedProduct(product);
//       }
//     // setSelectedProduct(product);
//     console.log(product)
//   }, [productId, products, setSelectedProduct]);

 let images = selectedProduct.image
  return (
    <div className='product-details border'>
      {/* <h1>{selectedProduct.name}</h1>
      <img src={selectedProduct.image} alt={selectedProduct.name} />
      <p>{selectedProduct.description}</p>
      <p>Price: ${selectedProduct.price}</p> */}
      <h1>{selectedProduct.name}</h1>
      {/* {
      selectedProduct.images.map(image => <img src={image.url} key={image.url} alt={selectedProduct.name}  />)}
      { */}

{/* {selectedProduct.image.map((image, index) => (
  <div className="point" key={index}>
  <div className={`${image === selectedImage && "current-point"}`}></div>
))} */}

    <img src={selectedProduct.images} alt={selectedProduct.name} />
      <p>{selectedProduct.description}</p>
      <p>Price: ${selectedProduct.price}</p>
    </div>
  );
};

export default ProductDetails;
