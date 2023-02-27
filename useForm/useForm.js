import { useState } from "react";

export const useForm = ( initialForm = {} ) => {
  
    const [formState, setFormState] = useState( initialForm ) //el formState es igual al initialForm que le mande como argumento

    const onInputChange = ({target}) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ] : value
        })
    }

    const onResetForm = () => {
        setFormState( initialForm )
    }

    //renderizar es mejor con el objeto {}
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }




}
