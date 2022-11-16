import React from 'react'
import ButtonContainer from './ButtonContainer'

import Count from '../component/Count'
import { useMoney } from '../context/MoneyContext'
import Sale from './Sale';
import Macaron from '../img/macaron.png'
import Croiss from '../img/croissant.png';
import FlourBatch from './FlourBatch';


const Flour = () => {
    const { money } = useMoney();

    return (
        <div>
            {money >= 3 ? (
                <div>
                    <ButtonContainer />
                    <Count />
                    <Sale img={Croiss} value={5} price={1} />
                    <Sale img={Macaron} value={8} price={3} />
                    <FlourBatch valueMoney={3} valueFloor={10} />

                </div>
            ) : (<div>
                <ButtonContainer />
                <Count />
                <Sale img={Croiss} value={5} price={1} />
                <Sale img={Macaron} value={8} price={3} />
            </div>
            )}

        </div>

    )
}
export default Flour; 