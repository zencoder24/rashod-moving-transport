export default function validateInfo(values){
    let errors = {}

    if(!values.name.trim()){
        errors.name = "Please enter a name"
    }

    //Email
    if(!values.email){
        errors.email = "Email required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    //Phone
    if(! /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(values.phone)){
        errors.phone = "Please provie a valid phone number"
    }

    //Details
    if(values.details.length < 30){
        errors.details = "Please provide us with a little more detail."
    }

    return errors
}