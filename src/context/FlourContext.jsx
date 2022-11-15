import React,{ createContext, useMemo, useState, useContext } from "react";

export const FlourContext = createContext();

export  const FlourProvider = ({children}) => {
   const [flour, setFlour] = useState(0);
   const value = useMemo(() => ({
    flour, setFlour
   }), [flour])
   return(
       <FlourContext.Provider value={value}>
            {children}
       </FlourContext.Provider>

   )
} 
export const useFlour = () => {
    const { flour, setFlour} = useContext(FlourContext);

    const Update  = (value) => {
        setFlour(value)
    }
    return { flour , Update}
}