import React from 'react'
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa'

const CartItem = ({ item }) => {
    console.log(item)

  return (
    <>
    <div className='mb-10'>CartItem</div>
    <div className='flex justify-between items-center p-2 border-b'>
        <div className='flex items-center'>
            <div className='w-[80px] asoect-square'>
                <img src={item.product.image} className='w-full h-full object-contain' alt=""/>
            </div>
        </div>
        <div>
            <p>{item.product.title}</p>
            <p>{item.quantity} x {item.product.price}</p>
        </div>
        <div>
            <button><FaMinus className='size-3'/></button>
            <button><FaPlus className='size-3'/></button>
        </div>
        <button><FaTrash /></button>
    </div>
    </>
  )
}

export default CartItem