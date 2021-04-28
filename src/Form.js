import React, { useState } from 'react'
import FormSignUp from './FormSignUp'
const Form = () => {
    function submitForm(){
        isSubmitted(true);
    }
    return (
        <div> 
            <FormSignUp/>
        </div>
    )
}

export default Form
