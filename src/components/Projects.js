import React from 'react'
import {useHistory} from 'react-router-dom'

const Projects = () => {
    const history = useHistory()
    return (
        <div>
            Projects
            <button 
            onClick={()=>history.push("/about")} 
            >about</button>
        </div>
    )
}

export default Projects
