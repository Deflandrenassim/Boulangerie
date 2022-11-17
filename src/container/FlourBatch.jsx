import React from 'react';
import BatchFlour from '../component/BatchFlour';
import Cake from '../component/Cake';
import { useFlour } from '../context/FlourContext';
import { useMoney } from '../context/MoneyContext';
import lotFarine from "../img/lotFarine.png";

const FlourBatch = ({ valueMoney, valueFloor, lot }) => {
    const { money, updateMoney } = useMoney();
    const { flour, Update } = useFlour();
    const handleMoney = () => {
        Update(flour + valueMoney)
        updateMoney(money - valueFloor)
    }
    if (money < valueMoney) return null;


    return (
        <div>
            <Cake src={lotFarine}></Cake>
            <BatchFlour onClick={handleMoney}> {lot}</BatchFlour>
        </div>
    )
}
export default FlourBatch;