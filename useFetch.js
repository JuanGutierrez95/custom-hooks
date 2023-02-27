import { useEffect } from "react";
import { useState } from "react";

export const useFetch = (url) => {

    const [state, setstate] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })


    const getFetch = async () => {

        setstate({
            ...state,
            isLoading: true,
        })

        const resp = await fetch(url);
        const data = await resp.json();
        
        setstate({
            data,
            isLoading: false,
            hasError: null,
        })
    }

    useEffect(() => { //me sirve para hacr una limpieza, una funcion pure. No una promesa, por eso no usamos async
        getFetch();
    }, [url])
    



  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
}
