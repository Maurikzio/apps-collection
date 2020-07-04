import React, { useState } from 'react';

import './simple-form-styles.css';
import img from './indian.png'

const SimpleForm = () => {
    const [ info, setInfo ] = useState({firstName: '', lastName: '', email: '', phone: ''})
    const [ errors, setErrors ] = useState({})

    const handleOnChange = e => {
        const { target: { value, name } } = e;
        setInfo({
            ...info, [name]: value
        })
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        const { firstName, lastName, email, phone} = info;

        //aunque al dar clic me mostrara false en consola, el estado ya habra cambiado
        //y si hay errores, estaran en TRUE, y por ende ya tendran border: red;
        setErrors({
            ...errors, firstName: firstName === '', lastName: lastName === '',
        })

        const data = {
            firstName, 
            lastName, 
            email, 
            phone
        }
        // console.log(data);
        // console.log(errors);
    }

    const handleOnFocus = (e) => {
        const { target: { name } } = e;
        setErrors({
            ...errors, [name]: false
        })
    }

    return(
        <div>
            <header>
                <h2>Simple Form</h2>
            </header>
            <div className='form-wrapper'>
                <img src={img} className='image'/>
                <form autoComplete='off' onSubmit={handleOnSubmit} className='simple-form'>
                    <div className='first-name'>
                        <p className='simple-form-input-title'><strong>First name:</strong></p>
                        <div className='simple-form-input-wrapper'>
                            <input
                                name='firstName'
                                type='text'
                                value={info.firstName}
                                onChange={handleOnChange}
                                className={`form-input ${errors.firstName ? ' error' : ''}`}
                                onFocus={handleOnFocus}
                            />
                            {errors.firstName && (<p className='simple-input-error-message'>Required field</p>)}
                        </div>
                    </div>
                    <div className='last-name'>
                        <p className='simple-form-input-title'><strong>Last name:</strong></p>
                        <div className='simple-form-input-wrapper'>
                            <input
                                name='lastName'
                                type='text'
                                value={info.lastName}
                                onChange={handleOnChange}
                                className={`form-input ${errors.lastName ? ' error' : ''}`}
                                onFocus={handleOnFocus}
                            />
                            {errors.lastName && (<p className='simple-input-error-message'>Required field</p>)}
                        </div>
                    </div>
                    <div className='email'>
                        <p className='simple-form-input-title'><strong>Email:</strong></p>
                            <input
                                name='email'
                                type='emails'
                                value={info.email}
                                onChange={handleOnChange}
                                className='form-input'
                            />
                    </div>
                    <div className='phone'>
                        <p className='simple-form-input-title'><strong>Phone:</strong></p>
                            <input
                                name='phone'
                                type='tel'
                                value={info.phone}
                                onChange={handleOnChange}
                                className='form-input'
                            />
                    </div>
                    <button className='simple-form-btn'>Send Information</button>
                </form>
            </div>
        </div>
    )
}

export default SimpleForm;