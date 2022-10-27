import React, { useState } from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'
import './Form.css'

const Form = () => {
    const [isSubmitted, setSubmitting]=useState(false);

    function submitForm(){
        setSubmitting(true);
        
    }

    return (
      <>
        <div className='form-container'>
          <span className='close-btn'>×</span>
          <div className='form-content-left'>
              <img className='form-img' 
                   src='img/sign-up.png' 
                   alt='spaceship' 
              />
          </div>
          {!isSubmitted ? (
            <FormSignup submitForm={submitForm} />
          ) : (
            <FormSuccess />
          )}
        </div>
      </>
    );
};

export default Form;