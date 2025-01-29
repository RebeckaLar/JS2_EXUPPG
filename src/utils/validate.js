export function validate(form, setErrors) {
    const err = {}
    let validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(form.name.trim() === '') {
        err.name = 'You need to enter a name'
    }

    if(form.email.trim() === '') {
        err.email = 'You need to enter an email-adress'
    } else if (!validRegex.test(form.email)){
        err.email= 'You need to enter a valid email-adress'
        console.log(form.email)
    }

    
    if(form.message.trim() === '') {
        err.message = 'You need to enter a message'
    }

    setErrors(err)

    return Object.keys(err).length <= 0
}