import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <ul>
            <li><Link to="/Home">Home</Link></li>
            {/* <li><Link to="/Hospitals">Hospitals</Link></li> */}
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Signup">Signup</Link></li>
            </ul>
        </>
    )
}

export default Navbar
