import React from 'react'
import { useFlour } from '../context/FlourContext'
import Button from '../component/Button';
import Cake from '../component/Cake';
import { useMoney } from '../context/MoneyContext';

const Sale = ({ img, value, price }) => {
    const { flour, Update } = useFlour();
    const { money, updateMoney } = useMoney()
    const handleBuy = () => {
        Update(flour - value)
        updateMoney(money + price)
        if (money < 0) {
            alert("vous navez pas assez");
        }
    }

    if (flour < value) return null;

    return (
        <div>
            <Cake src={img} />
            <Button onClick={handleBuy}> Achat </Button>
        </div>
    )
}
export default Sale; 