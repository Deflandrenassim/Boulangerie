import React from 'react'
import Button from '../component/Button'
import { useFlour } from '../context/FlourContext'
import Count from '../component/Count'
import { useMoney } from '../context/MoneyContext'
import Sale from './Sale';
import Croiss from '../img/croissant.png';
import FlourBatch from './FlourBatch';
import Macaron from './Macaron';


const Flour = () => {
    const { flour, Update } = useFlour();
    const { money } = useMoney();
    const handleOnePoint = (value) => {
        Update(flour + value);
        console.log(flour + value)
    }

    return (
        <div>

            {money >= 3 ? (
                <div>
                    <Button counter="counter" onClick={() => handleOnePoint(1)}> + 1 </Button>
                    <Count />
                    <Sale img={Croiss} value={5} price={1} />
                    <Sale img={Croiss} value={10} price={1} />
                    <Sale img={Croiss} value={15} price={1} />
                    <Sale img={Croiss} value={17} price={1} />
                    <Sale img={Croiss} value={22} price={1} />
                    <Sale img={Croiss} value={25} price={1} />
                    <Sale img={Croiss} value={26} price={1} />
                    <Sale img={Croiss} value={28} price={1} />
                    <Sale img={Croiss} value={30} price={1} />
                    <FlourBatch valueMoney={3} valueFloor={10} />
                    <Macaron />
                </div>
            ) : (<div>
                <Button counter="counter" onClick={() => handleOnePoint(1)}> + 1 </Button>
                <Count />
                <Sale img={Croiss} value={5} price={1} />
                <Sale img={Croiss} value={10} price={1} />
                <Sale img={Croiss} value={15} price={1} />
                <Sale img={Croiss} value={17} price={1} />
                <Sale img={Croiss} value={22} price={1} />
                <Sale img={Croiss} value={25} price={1} />
                <Sale img={Croiss} value={26} price={1} />
                <Sale img={Croiss} value={28} price={1} />
                <Sale img={Croiss} value={30} price={1} />
            </div>
            )}

        </div>

    )
}
export default Flour; 