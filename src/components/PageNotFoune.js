import React from 'react'
import { useLocation } from 'react-router-dom'

const PageNotFoune = () => {
    const location = useLocation()
    return (
        <div>
           page not found. {location.pathname}
        </div>
    )
}

export default PageNotFoune
