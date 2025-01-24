import React from 'react'
import Placeholder625 from '../Placeholders/625x647.svg'
import BestCollection from '../components/BestCollection'

const Home = () => {
  return (
    <>
    <div className="hero flex justify-center align-center">
      <div className=''>
        <p>WELCOME TO BMARKETO SHOP</p>
          <h1 className='mt-1'>Exclusive Chair gold Collection.</h1>
          <button className='btn mt-1'>SHOP NOW</button>
      </div>
      <div>
        <img src={Placeholder625}></img>
      </div>
    </div>

    <div>
      <BestCollection />
    </div>

    <div className='offers'>
      <p>Offer</p>
    </div>

    <div>
      <h3>Top selling products in this week</h3> 
    </div>

    <div>
      <p>Sub</p>
    </div>
    </>
  )
}

export default Home