import React, {useEffect, useState} from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('pnavarin@gmail.com');
    const [pass, setPass] = useState('');
    const [emailErrors, setEmailErrors] = useState([]);
    const [passwordErrors, setPasswordErrors] = useState([]);
    const [formValid, setFormValid] = useState(false);
    
    useEffect(() => {
        setEmailErrors([]);
        if(email.includes('@') === false){
            const emailSet = new Set([...emailErrors, 'Email must include @']);
            // setEmailErrors(emailErrors => [...emailErrors, 'Email must include @'])
            setEmailErrors(emailErrors => [...emailSet])
            
        } 
        if(email.slice(-4) !== '.com'){
            const emailSet = new Set([...emailErrors, 'Email must end with .com']);
            // setEmailErrors([...emailSet]);
            // setEmailErrors(emailErrors => [...emailErrors, 'Email must end with .com'])
            setEmailErrors(emailErrors => [...emailSet])
            
        }
        if (email.includes('@') === true && email.slice(-4) === '.com'){
            setEmailErrors([]);
        }
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

    const handleSubmit = (e) => {
        e.preventDefault();
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

                <ul>{emailErrorList}</ul>

                <label htmlFor="password">Password</label>
                <input type="password" onChange={(e) => setPass(e.target.value)} value={pass} placeholder="Must be at least 4 characters" id="password" name="password" />

                <ul>{passwordErrorList}</ul>

                <button id='login' type="submit">Log In</button>
            </form>

        </div>
    )
}