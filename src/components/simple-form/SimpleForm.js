import React, { useState } from 'react';

import './simple-form-styles.css';
import img from './indian.png'

const SimpleForm = () => {
    const [ info, setInfo ] = useState({})

    return(
        <div>
            <header>
                <h2>Simple Form</h2>
            </header>
            <div className='form-wrapper'>
                <img src={img} className='image'/>
                <form>
                    <div className='first-name'>
                        <p><strong>First name:</strong></p>
                        <p>
                            <input
                                name='firstName'
                                value={info.firstName && ''}
                            />
                        </p>    

                    </div>
                </form>
            </div>
        </div>
    )
}

export default SimpleForm;