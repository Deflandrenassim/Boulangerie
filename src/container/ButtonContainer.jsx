import React from "react"
import Button from "../component/Button";
import { useFlour } from "../context/FlourContext";
import { useMoney } from "../context/MoneyContext";

const ButtonContainer = () => {
    const { flour, update } = useFlour();
    const { money } = useMoney();
    const handleOnePoint = (value) => {
        update(flour + value);
    }
    return (
        <div>
            {money < 20 ? (
                <Button counter="counter" onClick={() => handleOnePoint(1)}> + 1 </Button>
            )
                : (
                    <Button counter="counter" onClick={() => handleOnePoint(2)}> + 2 </Button>
                )
            }
        </div>
    )
}
export default ButtonContainer;