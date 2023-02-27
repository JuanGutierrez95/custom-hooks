//Hook para buena practica lleva use
//Hook es una simple funcion 

import { useState } from "react"

//lo regresamos como un objeto asi puedo desestructuar exactamente lo que yo necesito 

export const useCounter = ( initialValue = 10 ) => {

    const [counter, setCounter] = useState( initialValue )

    const increment = ( value = 1 ) => {
        setCounter( (current) => current + value );
    }

    const decrement = ( value = 1 ) => {
        // if(counter === 0) return;

        setCounter((current) => current - value );
    }

    const reset = () => {
        setCounter( initialValue );
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }




}