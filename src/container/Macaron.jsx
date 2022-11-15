import React from 'react'
import Cake from '../component/Cake';
import Macaronne from '../img/macaron.png'

const Macaron = () => {
    return (
        <div>
            <Cake src={Macaronne}/>
        </div>
    )
}
export default Macaron;