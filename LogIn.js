import React, { useRef, useState } from 'react'
import { useAuth } from './AuthContext'
import { Alert } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
export default function Login() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        
        try {
            setError('');
            setLoading(true);
            
            await login(emailRef.current.value, passwordRef.current.value);
            navigate('/dashboard');
        } catch (err) {
            console.log(err);
            setError('Failed to log in');
        }
        setLoading(false);
    }
    return (
        <form onSubmit={handleSubmit}>
            <h3>Log In</h3>
            {error && <Alert variant="danger"> {error } </Alert> }
    <div className="mb-3">
        <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" ref={emailRef} required />
    </div>
    <div className="mb-3">
        <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password" ref={passwordRef} required
        />
    </div>
    <div className="d-grid">
                <button disabled={loading} type="submit" className="btn btn-primary">
            Log In
        </button>
    </div>
    <p className="forgot-password text-right">
        Need an <a href="/sign-up">account?</a>
    </p>
        </form>
    )
}