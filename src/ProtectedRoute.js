import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const ProtectedRoute = (props) => {
    return (
        <Route  render={()=>props.isAuth?<props.component />:<Redirect to="/" />} />
    )
}

export default ProtectedRoute
