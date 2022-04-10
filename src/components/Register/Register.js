import React from 'react';
import './Register.css'

const Register = () => {
    return (
        <div>
            <h3>Please Register now</h3>
            <form className='form'>
                <input type="text" placeholder='Your Name' /><br />
                <input type="email" placeholder='Your Email' /><br />
                <input type="password" placeholder='password' /><br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;