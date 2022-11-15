import React from 'react';
import BatchFlour from '../component/BatchFlour';
import { useFlour } from '../context/FlourContext';
import { useMoney } from '../context/MoneyContext';


const FlourBatch = ({valueMoney, valueFloor}) => {
    const { money , updateMoney} = useMoney();
    
    const { flour, Update } = useFlour();
    const handleMoney = () => {
        if( money <= 0 ){
            alert("pas assez pour acheter un LOT :/")
        } else {
            updateMoney(money - valueMoney)
            Update(flour + valueFloor)
        }
    }

    return (
       <BatchFlour onClick={handleMoney}/> 
    )
}
export default FlourBatch;