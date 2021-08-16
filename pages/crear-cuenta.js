import React,{useState} from "react";
import Layout from "../components/layout/Layout";
import {css} from '@emotion/react'
import Router from 'next/router'
import {Formulario,Campo,InputSubmit,Error} from '../components/ui/Formulario'
import firebase from '../firebase';

//validaciones
import useValidacion from "../hooks/useValidacion";
import validarCrearCuenta from "../validacion/validarCrearCuenta";
const INTI_STATE = {
   nombre:'',
   email:'',
   password:''
}

const CrearCuenta = () => {
   const [error,setError]=useState(false)
   const {valores,errores, handleSubmit,handleChange,handleBlur}=useValidacion(INTI_STATE,validarCrearCuenta,crearCuenta)

   const {nombre,email,password} = valores;
   async function crearCuenta(){
      try {
       await firebase.registrar(nombre,email,password)
      Router.push('/');
      } catch (error) {
         console.error('Hubo un errr al crear el usuario',error.message)
         setError(error.message)
         setTimeout(()=>{
            setError('')
         },3000)
      }
   }
   return (
      <div>
         <Layout>
            <>
               <h1 css={css`text-align:center;margin-top:5rem;`}>Crear Cuenta</h1>

               <Formulario onSubmit={handleSubmit} noValidate>
               {error && <Error>{error}</Error>}
                  <Campo>
                     <label htmlFor="nombre">Nombre</label>
                     <input
                        type="text"
                        id="nombre"
                        placeholder="Tu nombre"
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                        onBlur={handleBlur}
                  
                     />
                  </Campo>
                  {errores.nombre &&<Error > {errores.nombre}</Error>}
                  <Campo>
                     <label htmlFor="email">Email</label>
                     <input
                        type="text"
                        id="email"
                        placeholder="Tu email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                     />
                  </Campo>
                  {errores.email &&<Error > {errores.email}</Error>}

                  <Campo>
                     <label htmlFor="password">Password</label>
                     <input
                        type="password"
                        id="password"
                        placeholder="Tu password"
                        name="password"
                        value={password}

                        onChange={handleChange}
                        onBlur={handleBlur}
                     />
                  </Campo>
                  {errores.password &&<Error > {errores.password}</Error>}

                  <InputSubmit type="submit" value="Crear Cuenta" />
               </Formulario>
            </>
         </Layout>
      </div>
   );
};

export default CrearCuenta;
