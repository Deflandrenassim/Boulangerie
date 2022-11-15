import React from "react";
import { FlourProvider } from "../context/FlourContext";
import { MoneyProvider } from "../context/MoneyContext";
import Flour from "./Flour";

const Counter = () => {
    return (
        <FlourProvider>
          <MoneyProvider>
            <Flour />
          </MoneyProvider>
        </FlourProvider>
    )
}
export default Counter