import React, { useState,useEffect } from 'react'

const useValidacion = (stateInit, validar, fn) => {
    const [valores,setValores]=useState(stateInit);
    const [errores,setErrores]=useState({});
    const [submitFrom, setSubmitForm] = useState(false); 
 
    useEffect(()=>{
        if(submitFrom){
            const noErrores = Object.keys(errores).length ===0;
            if(noErrores){
                fn(); //fn= Función que se ejecuta en el componente
            }
            setSubmitForm(false);
        }
    },[errores])

    //función que se ejecuta conforme el ususario escribe algo

    const handleChange =(e)=>{
        setValores({
            ...valores,
            [e.target.name]:e.target.value
        })
    }

    //Funcion que se ejecuta cuando el suario hace submit
    const handleSubmit =e=>{
        e.preventDefault();
        const erroresValidacion = validar(valores)
        setErrores(erroresValidacion)
        setSubmitForm(true)
    }

    // Cuando se realiza el evento de blur
    const handleBlur =()=>{
        const erroresValidacion = validar(valores)
        setErrores(erroresValidacion)
    }
    return {
        valores,
        errores,
        handleSubmit,
        handleChange,
        handleBlur
    }
}

export default useValidacion
