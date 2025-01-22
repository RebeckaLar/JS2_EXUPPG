import FormInput from "./FormInput"
import useForm from "../hooks/useForm"

const Form = () => {

    const {form, errors, handleChange, handleSubmit} = useForm({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    company: ''
    })

    const onSubmit = (e) => {
        // e.preventDefault()
        handleSubmit(e, async(values) => {
            // const res = await fetch ('url', {
            //     body: JSON.stringify(values)
            // })
            console.log(values)
        })
    }

  return (
    <>
    <form onSubmit={onSubmit} className='container justify-center'>
        <FormInput 
        className='m-2'
        label='Your Name'
        name='fullName'
        id='fullName'
        type='text'
        value={form.fullName}
        onChange={handleChange}
        errorMsg={errors.fullName}
        />

        <button>Submit</button>
    </form>
    <div>
        <p>Name: {form.fullName}</p>
    </div>
    </>
  )
}

export default Form