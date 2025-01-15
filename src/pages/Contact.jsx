import React from 'react'
import Form from '../components/Form'
import useForm from '../hooks/useForm'

const Contact = () => {
  return (
    <>
      <div className='p-3 container justify-center'>
        <h1>Contact</h1>
      </div>
      <div className='contact-form p-2'>
        <Form />
      </div>
    </>
  )
}

export default Contact