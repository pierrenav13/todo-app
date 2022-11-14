import React, {useState} from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='auth-form-container'>

            <form className='login-form' onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="user@rapptrlabs.com" id="email" name="email"/>
                
                <label htmlFor="password">Password</label>
                <input type="password" onChange={(e) => setPass(e.target.value)} value={pass} placeholder="Must be at least 4 characters" id="password" name="password" />

                <button type="submit">Log In</button>
            </form>

        </div>
    )
}