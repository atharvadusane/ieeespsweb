import React from 'react'
import { Link } from 'react-router-dom'


const Navleft = () => {
    return (
        <div>
            <div className='left'>
                <div className="head--logo">
                    <Link to={'/'} ><img src="spslogo.webp" alt="sps logo" width="85px" height="70px" /></Link>
                </div>
                <div className="head">
                    <Link to={'/'} >IEEE SPS PCCoE Student Chapter</Link>
                </div>
            </div>
        </div>
    )
}

export default Navleft