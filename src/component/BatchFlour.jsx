import React from "react";
import '../css/BatchFlour.css';
import Farine from '../img/lotFarine.png'

const BatchFlour = ({children, onClick}) => {
    return (
        <div className="batch_flour">
             <img className="batch_flour" src={Farine} alt="lot de farine" />
             <button onClick={onClick}> Achat LOT </button>
             {children}
        </div>
       

    )
}
export default BatchFlour; 