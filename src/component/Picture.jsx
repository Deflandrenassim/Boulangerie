import React from 'react'
import '../css/Picture.css'

const Picture = ({ src }) => {
    return (
        <div className='container_cake'>
            <img className="cake" src={src} alt="cake" />
        </div>
    )
}
export default Picture; 