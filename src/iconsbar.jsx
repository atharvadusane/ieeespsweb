import React from 'react'
import { Link as Linktoo } from 'react-router-dom'
import { Link } from 'react-scroll'

const Iconsbar = () => {
  return (
    <div className='iconsbar'>
        <div className="aim iconsbar-item">
            <Linktoo to={'/aimpage'}><img src="Moving forward-amico.png" alt="" width="200px"/></Linktoo>
            <span>Aim</span> 
        </div>
        <div className="iconsbar-recruitment iconsbar-item">
            <Linktoo to={'/recruitment'}><img src="handshake.png" alt="" width="200px"/></Linktoo>  
            <span>Recruitment</span>
        </div>
        <div className="team iconsbar-item">
            <Link to='members' spy={true} smooth={true} offset={2} duration={500} ><img src="forming-team-leadership.gif" alt="" width="200px"/></Link>
            <span>Team</span>
        </div>
        <div className="events iconsbar-item">
            <Linktoo to={'/eventspage'}><img src="Work-anniversary-rafiki.png" alt="" width="200px"/></Linktoo>
            <span>Events</span>
        </div>
        <div className="gallery iconsbar-item">
            <Linktoo to={'/photogallery'}><img src="Image-folder-cuate.png" alt="" width="200px"/></Linktoo>
            <span>Gallery</span>
        </div>
    </div>
  )
}

export default Iconsbar