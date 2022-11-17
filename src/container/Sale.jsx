import React from 'react'
import { useFlour } from '../context/FlourContext'
import Button from '../component/Button';
import Picture from '../component/Picture';
import { useMoney } from '../context/MoneyContext';

const Sale = ({ img, value, price, name }) => {
    const { flour, update } = useFlour();
    const { money, updateMoney } = useMoney()
    const handleBuy = () => {
        update(flour - value)
        updateMoney(money + price)
    }

    if (flour < value) return null;

    return (
        <div className="sale">
            <Picture src={img} />
            <Button onClick={handleBuy}> {name} </Button>
        </div>
    )
}
export default Sale; 