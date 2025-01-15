import useForm from "../hooks/useForm"
import FormInput from "./FormInput"

const Form = () => {

    const {
        form, 
        error,
        handleChange,
        handleSubmit
    } = useForm({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    company: ''
    })

    const onSubmit = (e) => {
        handleSubmit(e, async(values) => {
            const res = await fetch ('url', {
                body: JSON.stringify(values)
            })
        })
    }

  return (
    <>
    <form noValidate onSubmit={onSubmit} className='container justify-center'>
        <FormInput 
        className='m-2'
        label='Your Name'
        name='fullName'
        id='fullName'
        type='text'
        // value={FormInput.fullName}
        value={form.fullName}
        onChange={handleChange}
        />
    </form>
    <div>
        <p>Name: {}</p>
    </div>
    </>
  )
}
// console.log(FormInput.phone)


export default Form