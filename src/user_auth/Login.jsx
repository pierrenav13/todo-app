import React, {useState} from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='auth-form-container'>
            <h2>Login</h2>
            <form className='login-form' onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" value={email} placeholder="user@rapptrlabs.com" />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Must be at least 4 characters" />

            </form>

        </div>
    )
}