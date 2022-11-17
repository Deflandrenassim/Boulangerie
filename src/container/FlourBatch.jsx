import React from 'react';
import BatchFlour from '../component/BatchFlour';
import Picture from '../component/Picture';
import { useFlour } from '../context/FlourContext';
import { useMoney } from '../context/MoneyContext';
import lotFarine from "../img/lotFarine.png";

const FlourBatch = ({ price, count, lot }) => {
    const { money, updateMoney } = useMoney();
    const { flour, update } = useFlour();
    const handleMoney = () => {
        update(flour + price)
        updateMoney(money - count)
    }
    if (money < price) return null;


    return (
        <div>
            <Picture src={lotFarine}></Picture>
            <BatchFlour onClick={handleMoney}> {lot}</BatchFlour>
        </div>
    )
}
export default FlourBatch;