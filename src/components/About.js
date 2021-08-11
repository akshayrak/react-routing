import React from 'react'
import { useParams, withRouter } from 'react-router'


const About = () => {
    const {name} = useParams()
    return (
        <div>
           about {name}
        </div>
    )
}

export default withRouter(About)
