import { useState } from "react"

const useForm = (formData) => {

    const [form, setForm] = useState({...formData})
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const {name, value} = e.target

        setForm(data => ({
           ...data,
           [name]: value
        }))
    }

    const handleSubmit = (e, cb) => {
        e.preventDefault()
        console.log('hej')
        //VALIDERING

        cb(form);
    }

  return (
    form,
    errors,
    handleChange,
    handleSubmit
  )
}

export default useForm