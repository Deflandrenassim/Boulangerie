import React from "react";
import '../css/BatchFlour.css';


const BatchFlour = ({ children, onClick, lot }) => {
    return (
        <div className="batch_flour">
            <button onClick={onClick}> {lot} </button>
            {children}
        </div>
    )
}
export default BatchFlour; 