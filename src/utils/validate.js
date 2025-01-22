export function validate(form, setErrors) {
    const err = {}

    if(form.fullName.trim() === '') {
        err.fullName = 'You need to enter a name'
    }

    setErrors(err)

    return Object.keys(err).length <= 0
    //lägger om err ojbektet och kollar längen.
    //om längden mindre än 0, då är påståendet tru (valideringen gått bra)'
    //om längre är valideringen false, return, avbryt skicka inte in till API?
}

