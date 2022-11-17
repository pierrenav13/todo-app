import React, {useEffect, useState} from "react";
import $ from 'jquery';
import { useNavigate } from "react-router-dom";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [emailErrors, setEmailErrors] = useState([]);
    const [passwordErrors, setPasswordErrors] = useState([]);
    const [formValid, setFormValid] = useState(false);
    
    useEffect(() => {
        //Email Validation Logic
        const emailInput = $("#email")
        if(email.length > 0){
            if (email.includes('@') === false) {
                setEmailErrors(['Email must include @']);
                emailInput.css({"border": "2px solid red"})
            } else {
                setEmailErrors([]);
                emailInput.css({ "border": "2px solid blue"})
            }
            
            if (email.slice(-4) !== '.com') {
                if (email.length > 0) {
                    setEmailErrors(emailErrors => [...emailErrors, 'Email must end with .com'])
                    emailInput.css({"border": "2px solid red"})
                } else {
                    setEmailErrors(['Email must end with .com'])
                    emailInput.css({"border": "2px solid red"})
                }
            }
            if (email.includes('@') === true && email.slice(-4) === '.com') {
                setEmailErrors([]);
            }
        } else {
            setEmailErrors([]);
            emailInput.css({ "border": "2px solid blue"})
        }
        
        
        //Password Validation Logic
        const passInput = $(".pass-input");
        if(pass.length === 0){
            setPasswordErrors([]);
            passInput.css({ "border": "2px solid blue"})
        } else if (pass.length < 4){
            setPasswordErrors(['Password must be greater than 4 characters']);
            passInput.css({ "border": "2px solid red"})
        } else if (pass.length > 16){
            setPasswordErrors(['Password cannot be greater than 16 characters']);
            passInput.css({ "border": "2px solid red"})
        }  else {
            setPasswordErrors([]);
            passInput.css({ "border": "2px solid blue"})
        }
        
    }, [email, pass])

    useEffect(() => {
        if ((emailErrors.length === 0 && passwordErrors.length === 0) && (email.length > 5 && pass.length > 3)){
            setFormValid(true);
            $('#login').css({'opacity': 1});
            $('#login').addClass('hoverable');
        } else {
            setFormValid(false);
            $('#login').css({'opacity': 0.5});
            $('#login').removeClass('hoverable');
        }
    }, [email, pass])

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValid)
        if(formValid){
            console.log("ss")
            navigate("/todos");
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
                <input className="email-input" type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="user@rapptrlabs.com" id="email" name="email"/>

                <ul className='email-errors'>{emailErrorList}</ul>

                <label htmlFor="password">Password</label>
                <input className="pass-input" type="password" onChange={(e) => setPass(e.target.value)} value={pass} placeholder="Must be at least 4 characters" id="password" name="password" />

                <ul className='password-errors'>{passwordErrorList}</ul>

                <button id='login' className='hoverable' type="submit">Log In</button>
            </form>

        </div>
    )
}