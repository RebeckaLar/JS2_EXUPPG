import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router'

const Products = () => {
  
  const [products, setproducts] = useState([])

  useEffect(() => { //tala om ngt ska ske en gång, genom lämna depencyn tom. Kan också få funktion köra om om urlen ändras
      const getproducts = async () => {
          const res = await fetch("https://js2-ecommerce-api.vercel.app/api/products")
          console.log(res);
          const data = await res.json()
          console.log(data)
          setproducts(data)
      } 
  getproducts();
  }, [])

return (
  <div>
    <h1>Products</h1>
    <ul>
      {
        products.map((product) => (
          // <li key={product._id}><Link>{product.name}</Link></li>
          <li key={product._id}><Link to={`/products/${product._id}`}>{product.name}</Link></li>
        ))
      }
    </ul>
  </div>
  )
}

export default Products