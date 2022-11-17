import React from 'react'
import { useFlour } from '../context/FlourContext'
import '../css/BatchFlour.css';
import { FaDollarSign } from 'react-icons/fa';
import { useMoney } from '../context/MoneyContext';

const Count = () => {
  const { flour } = useFlour();
  const { money } = useMoney();
  return (
    <div className='container_count'>
      <div className="flour"> Flour : {flour}</div>
      <div className="money"> Money: {money} <FaDollarSign /> </div>
    </div>
  )
}
export default Count;