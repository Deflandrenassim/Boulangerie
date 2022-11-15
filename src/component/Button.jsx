import React from 'react'
import '../css/Button.css'

const Button = ({children, onClick, counter}) => {
    return (
        <button className={`button ${counter}`} onClick={onClick}> {children}</button>
    )
}
export default Button; 