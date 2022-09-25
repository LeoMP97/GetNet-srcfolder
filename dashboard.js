import React, { useState} from "react"
import { Card, Alert, Button } from 'react-bootstrap'
import { useAuth } from './AuthContext'
import { useNavigate } from 'react-router-dom'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';




export default function Dashboard() {
    const [error, setError] = useState('')
    const { currentUser, logout } = useAuth()
    const navigate = useNavigate();
    const [value, onChange] = useState(new Date());


    async function handleLogout() {
        

        try {
            setError('')
            await logout()

        }
        catch {
            setError('Failed to log out')
            navigate('/sign-up')

        }

    }


    return (
        <>
            <h3 className='text-center mb-3'>Dashboard</h3>
                {error && <Alert variant="danger"> {error } </Alert> }
            <h2 className='text-center mb-3'>My Calendar</h2>
            <strong>Email:</strong> {currentUser.email}
                    <Calendar
                        onChange={onChange}
                        value={value}
                    />
             <div className="d-grid">
            <Button onClick={handleLogout }>
                Log Out
            </Button>
            </div>
            <p className='text-center mb-3'>
                Create <a href="/event"> Event</a>
            </p>
            </>
           )
}