import React, { useState } from 'react';

import './simple-form-styles.css';
import img from './indian.png'

const SimpleForm = () => {
    const [ info, setInfo ] = useState({firstName: '', lastName: '', email: '', phone: ''})
    const [ errors, setErrors ] = useState({firstName: false, lastName: false})

    const handleOnChange = e => {
        const { target: { value, name } } = e;
        setInfo({
            ...info, [name]: value
        })
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        const { firstName, lastName, email, phone} = info;

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
        console.log(errors);
    }

    return(
        <div>
            <header>
                <h2>Simple Form</h2>
            </header>
            <div className='form-wrapper'>
                <img src={img} className='image'/>
                <form autoComplete='off' onSubmit={handleOnSubmit}>
                    <div className='first-name'>
                        <p><strong>First name:</strong></p>
                        <p>
                            <input
                                name='firstName'
                                type='text'
                                value={info.firstName}
                                onChange={handleOnChange}
                                className={errors.firstName ? 'error' : ''}
                            />
                        </p>    
                    </div>
                    <div className='last-name'>
                        <p><strong>Last name:</strong></p>
                        <p>
                            <input
                                name='lastName'
                                type='text'
                                value={info.lastName}
                                onChange={handleOnChange}
                            />
                        </p>    
                    </div>
                    <div className='email'>
                        <p><strong>Email:</strong></p>
                        <p>
                            <input
                                name='email'
                                type='emails'
                                value={info.email}
                                onChange={handleOnChange}
                            />
                        </p>    
                    </div>
                    <div className='phone'>
                        <p><strong>Phone:</strong></p>
                        <p>
                            <input
                                name='phone'
                                type='tel'
                                value={info.phone}
                                onChange={handleOnChange}
                            />
                        </p>    
                    </div>
                    <button className='simple-form-btn'>Send Information</button>
                </form>
            </div>
        </div>
    )
}

export default SimpleForm;