import React from 'react'
import { Link } from 'react-router-dom'

const Eventplanner = () => {
    return (
        <div className='eventplanner' id='eventplanner'>
            <h2>Eventplanner</h2>
            <div className="event-list">
                <div className="event-card">
                    <span>Abhiyantrix 2023</span>
                </div>
                <div className="event-card">
                    <span>Inaugration of IEEE SPS Student Chapter</span>
                </div>
                <div className="event-card">
                    <span>Project exhibition at PCCoE</span>
                </div>
                <div className="event-card">
                    <span>Seminar on "Scope in Embedded Systems"</span>
                </div>
                <div className="event-card">
                    <span>Workshop on "Embedded Systems"</span>
                </div>
                <div className="event-card">
                    <span>Upcomming Events ... </span>
                </div>
                <Link to={'/pastevents'} >Go to Past Events</Link>
            </div>
        </div>
    )
}

export default Eventplanner

// abhiyantrix, inaugration event, project exhibition at pccoe, seminar on scope in embedded systems, workshop on microcontrollers and embedded systems, 