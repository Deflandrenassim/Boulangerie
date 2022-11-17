import React from 'react'
import ButtonContainer from './ButtonContainer';
import ChocolateBread from '../img/ChocolateBread.jpeg';
import Tarte from '../img/tarte.png'
import Count from '../component/Count';
import Sale from './Sale';
import Macaron from '../img/macaron.png'
import Croiss from '../img/croissant.png';
import FlourBatch from './FlourBatch';


const Flour = () => {

    return (
        <div>
            <div>
                <ButtonContainer />
                <Count />
                <Sale img={Croiss} value={3} price={1} />
                <Sale img={ChocolateBread} value={5} price={2} />
                <Sale img={Macaron} value={8} price={3} />
                <Sale img={Tarte} value={8} price={15} />
                <FlourBatch price={3} count={3} lot="lot de 3" />
                <FlourBatch price={45} count={50} lot=" lot de 50" />
                <FlourBatch price={50} count={100} lot="lot de 100" />
            </div>
        </div>

    )
}
export default Flour; 