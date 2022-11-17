import React from 'react'
import ButtonContainer from './ButtonContainer';
import '../css/Flour.css'
import FlourBatch from './FlourBatch';
import Count from '../component/Count';
import Sale from './Sale';
import Tarte from '../img/tarte.png'
import ChocolateBread from '../img/ChocolateBread.jpeg';
import Macaron from '../img/macaron.png'
import Croiss from '../img/croissant.png';


const Flour = () => {

    return (
        <div className="container">
            <Count />
            <div className='sale'>
                <Sale img={Croiss} value={3} price={1} name="Croissant" />
                <Sale img={ChocolateBread} value={5} price={2} name="Chocolat Bread" />
                <Sale img={Macaron} value={8} price={3} name="Macaroon" />
                <Sale img={Tarte} value={8} price={15} name="Strawberry Cake" />
            </div>
            <div className='container_flour_batch'>
                <FlourBatch price={3} count={3} lot="lot de 3" />
                <FlourBatch price={45} count={50} lot=" lot de 50" />
                <FlourBatch price={50} count={100} lot="lot de 100" />
            </div>
            <ButtonContainer />
        </div>


    )
}
export default Flour; 