import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import ShoppingCart from './ShoppingCart'

//Kod från Joakim Lindh, URL: https://www.youtube.com/watch?v=bbohsfuzcao
const Dropdown = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false)
    //klickar användaren utanför modalen blir isOpen false igen, alltså stängs dropdownen

  return (
    <>
    { isOpen && <DropdownBg setIsOpen={setIsOpen}/>}
    {/* vill toggla setisopen. vi har vårt state sen innan,
    vill returnera det den inte är */}
    <button onClick={() => setIsOpen(state => !state)}>
        { children } 
    </button>

    {
        isOpen && (
            <div className='p-4 mt-2 absolute bg-rose-300 w-[400px] right-0 z-10 rounded-md shadow-lg'>
                <div className="py-1"><ShoppingCart setIsOpen={setIsOpen}/></div>
            </div>
        )
    }
    </>
  )
}

export default Dropdown

const DropdownBg = ({ setIsOpen }) => {
    return ReactDOM.createPortal ((
        <div 
        className='absolute inset-0 bg-transparent' 
        onClick={() => setIsOpen(false)}>         
        </div>
    ), document.querySelector('#modal'))
}