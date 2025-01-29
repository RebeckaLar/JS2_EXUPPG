import React from 'react'
import Form from '../components/Form'
import useForm from '../hooks/useForm'

const Contact = () => {
  return (
    <>
      <div className='flex p-11 justify-center bg-gray-200'>
        <h1 className='text-[3rem]'>Contact</h1>
      </div>
    <div className='p-10 bg-gray-100'>
      <div className='contact-form p-5'>
        <Form />
      </div>
    </div>
   </>
  )
}

export default Contact