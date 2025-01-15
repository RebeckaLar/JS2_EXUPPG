import React from 'react'
import { Link } from 'react-router'
import Placeholder270 from '../Placeholders/270x295.svg'


const Product = (link, image, title, price) => {
  return (
    <>
    <div className='product'>
        <Link to={ link }>
            <img src={ Placeholder270 }></img>
            <p>{ title }</p>
            <p>{ price }</p>
        </Link>
    </div>
    </>
  )
}

export default Product