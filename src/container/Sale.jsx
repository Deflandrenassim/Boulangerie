import React from 'react'
import { useFlour } from '../context/FlourContext'
import Button from '../component/Button';
import Picture from '../component/Picture';
import { useMoney } from '../context/MoneyContext';

const Sale = ({ img, value, price }) => {
    const { flour, update } = useFlour();
    const { money, updateMoney } = useMoney()
    const handleBuy = () => {
        update(flour - value)
        updateMoney(money + price)
    }

    if (flour < value) return null;

    return (
        <div>
            <Picture src={img} />
            <Button onClick={handleBuy}> Achat </Button>
        </div>
    )
}
export default Sale; 