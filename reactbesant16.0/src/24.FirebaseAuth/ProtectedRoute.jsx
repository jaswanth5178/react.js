import React from 'react'
import { Navigate } from 'react-router'

const ProtectedRoute = ({children}) => {

let AcessToken = localStorage.getItem('token')

return (
    AcessToken ? children : <Navigate to='/' />
)
}

export default ProtectedRoute