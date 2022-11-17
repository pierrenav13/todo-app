import React, {useEffect, useState} from "react";
import $ from 'jquery';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [emailErrors, setEmailErrors] = useState([]);
    const [passwordErrors, setPasswordErrors] = useState([]);
    const [formValid, setFormValid] = useState(false);

    let loginButton = document.getElementById('login');

    
    useEffect(() => {
        //Email Validation Logic
        if(email.length > 0){
            if (email.includes('@') === false) {
                setEmailErrors(['Email must include @']);
            } else {
                setEmailErrors([]);
            }

            if (email.slice(-4) !== '.com') {
                if (email.length > 0) {
                    setEmailErrors(emailErrors => [...emailErrors, 'Email must end with .com'])
                } else {
                    setEmailErrors(['Email must end with .com'])
                }
            }
            if (email.includes('@') === true && email.slice(-4) === '.com') {
                setEmailErrors([]);
            }
        } else {
            setEmailErrors([]);
        }
        

        //Password Validation Logic
        if(pass.length === 0){
            setPasswordErrors([]);
        } else if (pass.length < 4){
            setPasswordErrors(['Password must be greater than 4 characters']);
        } else if (pass.length > 16){
            setPasswordErrors(['Password cannot be greater than 16 characters']);
        }  else {
            setPasswordErrors([]);
        }

    }, [email, pass])

    useEffect(() => {
        if (emailErrors.length === 0 && passwordErrors.length === 0){
            setFormValid(false);
            $('#login').css({'opacity': 1});
        } else {
            setFormValid(true);
            $('#login').css({'opacity': 0.5});
        }

        // if(formValid){
        //     $('#login').css({'opacity': 1});
        // } else {
        //     $('#login').css({'opacity': 0.5});
        // }
    }, [email, pass])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formValid){

        }
    }

    

    const emailErrorList = (emailErrors || []).map((error, id) => 
        <li key={id}>{error}</li>
    );
   

    const passwordErrorList = passwordErrors.map((error, id) => 
        <li key={id}>{error}</li>
    );

    return (
        <div className='auth-form-container'>

            <form className='login-form' onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="user@rapptrlabs.com" id="email" name="email"/>

                <ul className='email-errors'>{emailErrorList}</ul>

                <label htmlFor="password">Password</label>
                <input type="password" onChange={(e) => setPass(e.target.value)} value={pass} placeholder="Must be at least 4 characters" id="password" name="password" />

                <ul className='password-errors'>{passwordErrorList}</ul>

                <button id='login' type="submit">Log In</button>
            </form>

        </div>
    )
}