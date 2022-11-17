import React from 'react'
import ButtonContainer from './ButtonContainer';
import Pain from '../img/painChocolat.jpeg';
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
                <Sale img={Pain} value={5} price={2} />
                <Sale img={Macaron} value={8} price={3} />
                <Sale img={Tarte} value={8} price={15} />
                <FlourBatch valueMoney={3} valueFloor={3} lot="3" />
                <FlourBatch valueMoney={45} valueFloor={50} lot="50" />
                <FlourBatch valueMoney={55} valueFloor={100} lot="100" />
            </div>



        </div>

    )
}
export default Flour; 