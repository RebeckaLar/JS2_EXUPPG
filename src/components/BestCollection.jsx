import React from 'react'
import Product from './Product'
import Placeholder270 from '../Placeholders/270x295.svg'

const BestCollection = () => {
  return (
    <>
    <h1 className='flex justify-center'>Best Collection</h1>
    <div className='flex justify-center'>
        <Product link='' image={Placeholder270} title='Titel' price='20kr'/>
        <Product />
    </div>
    </>
  )
}

export default BestCollection