import React from 'react'
import '../css/Cake.css'

const Cake = ({src}) => {
    return (
        <div className='container_cake'>
            <img className="cake" src={src} alt="petit croissant"/> 
        </div>
    )
}
export default Cake; 