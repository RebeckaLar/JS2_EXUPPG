import React from 'react'
import { Link } from 'react-router'
import { useCart } from '../contexts/CartContextProvider'
import CartItem from './CartItem'

const ShoppingCart = (setIsOpen) => {

    const { cart, totalQuantity, totalPrice } = useCart()
    // console.log(cart)

  return (
    <div>
        <ul>
            {
                cart <= 0
                ? (
                    <div className='text-center'>
                        <p>Your cart is empty</p>
                    </div>

                )
                : (
                    cart.map((item) => (
                        <div key={item.product._id}>
                            <CartItem item={item}/>
                        </div>
                    ))    
                )
            }
        </ul>
        <div>
            <p>Total: { totalPrice }</p>
        </div>
        <div className='my-3'>
            <Link 
            to='/checkout' 
            className='btn rounded'
            onClick={() => setIsOpen(false)} //Modalen stängs när Checkout-knappen klickas på
            >Checkout
            </Link>
        </div>
    </div>
  )
}

export default ShoppingCart