import React, { useRef, useState } from 'react'
import { useAuth } from './AuthContext'
import { Alert } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'


export default function Signup() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const { signup} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()


    async function handleSubmit(e) {
        e.preventDefault()

        try {

            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            navigate.push('/dashboard')

        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)
    }
    return (
        <form onSubmit={handleSubmit}>
            <h3>Sign Up</h3>
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
            Sign Up
        </button>
    </div>
    <p className="forgot-password text-right">
        Already registered <a href="/sign-in">sign in?</a>
    </p>
        </form>
    )
}