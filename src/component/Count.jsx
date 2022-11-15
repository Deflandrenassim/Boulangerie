import React from 'react'
import { useFlour } from '../context/FlourContext'
import { useMoney } from '../context/MoneyContext';

const Count = () => {
    const { flour } = useFlour();
    const { money } = useMoney();
    return (
        <div>
          le nombre de farine actuel :   {flour}
        <div>
          Tu a {money} $ actuellement.
        </div>
        </div>
    )
}
export default Count;