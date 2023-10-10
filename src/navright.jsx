import React from 'react'
import {Link as Linktoo} from 'react-router-dom'
import {Link} from 'react-scroll'

const Navright = () => {
    return (
        <div className='right'>
            <div className="list">
                <div className="nav-about list-item">
                    <Linktoo to={'/recruitment'}>Recruitment</Linktoo>
                </div>
                <div className="nav-events list-item">
                    <Link to='eventplanner' spy={true} smooth={true} offset={8} duration={500} >Events</Link>
                </div>
                <div className="nav-team list-item">
                    <Link to='members' spy={true} smooth={true} offset={2} duration={500} >Members</Link>
                </div>
                <div className="nav-login list-item">
                    <Linktoo to={"/login"} >Login</Linktoo>
                </div>
            </div>
        </div>
    )
}

export default Navright