import { useState, useEffect } from "react"
import { useParams } from "react-router"
import Placeholder501 from "../Placeholders/501x430.svg"

const ProductItem = () => {

  const { productItem } = useParams()

  const [product, setProduct] = useState({})

  // const laptops = product.filter(cat=> 
  //   cat.category === 'laptop'
  // )
  //https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
  // map over laptops. om category === laptop, visa laptop-products. 

  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch('https://js2-ecommerce-api.vercel.app/api/products/' + productItem)
      const data = await res.json()
      setProduct(data) 
      // product var tom array, vi setProduct med data så product får api-datan
    }
    getProduct()
  })

  // const listImages = product.map(img =>
  //  console.log('hi')
  // )

  return (
    <div>
        <h1>Product details</h1>
        {/* <figure>{Placeholder501}</figure> */}
        {/* <img>{product.images[1]}</img> */}
        {/* <p>{listImages}</p> */}
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <h4>{product.price} kr </h4>
        <button className="btn">Add to cart</button>
        <p>Category: {product.category}</p>
    </div>
  )
}

export default ProductItem