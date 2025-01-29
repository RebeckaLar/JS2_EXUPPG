import FormInput from "./FormInput"
import useForm from "../hooks/useForm"
import { useState } from "react"
import Feedback from "./Feedback"

const Form = () => {

    const {form, errors, handleChange, handleSubmit} = useForm({
    name: '',
    email: '',
    message: '',
    })

    const [sent, setSent] = useState(false);

    const onSubmit = (e) => {
        handleSubmit(e, async(values) => {
            const res = await fetch ('https://js2-ecommerce-api.vercel.app/api/messages', {
                method: 'POST',
                body: JSON.stringify(values)
            })
            console.log(values)
            console.log(res)

            if(res.status == 200) {
                const message = await res.json();
                console.log(message)
                setSent(true)
            } else {
                const errorData = await res.json();
                console.log(errorData)
                throw new Error ('Something went wrong.');
            }
        })
    }

  return (
    <>
    <form onSubmit={onSubmit} className='container justify-center bg-white p-15'>
        <div className='flex-col'>
            <div className='flex'>
            <FormInput 
            className='m-2'
            label='Your Name* '
            name='name'
            id='name'
            type='text'
            value={form.name}
            onChange={handleChange}
            errorMsg={errors.name}
            />

            <FormInput 
            className='m-2'
            label='Your Email* '
            name='email'
            id='email'
            type='text'
            value={form.email}
            onChange={handleChange}
            errorMsg={errors.email}
            />
            </div>

            <FormInput 
            className='m-2'
            label='Your Message* '
            name='message'
            id='message'
            type='text'
            value={form.message}
            onChange={handleChange}
            errorMsg={errors.message}
            />
            
            <div>
                <button className="btn m-2 cursor-pointer">Submit</button>
                {sent && <Feedback/>}
            </div>
        </div>
    </form>
    {/* <div>
        <p>Name: {form.name}</p>
        <p>Email: {form.email}</p>
        <p>Message: {form.message}</p>
    </div> */}
    </>
  )
}

export default Form