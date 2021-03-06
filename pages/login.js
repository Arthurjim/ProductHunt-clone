import React,{useState} from "react";
import Layout from "../components/layout/Layout";
import {css} from '@emotion/react'
import Router from 'next/router'
import {Formulario,Campo,InputSubmit,Error} from '../components/ui/Formulario'
import firebase from '../firebase';

//validaciones
import useValidacion from "../hooks/useValidacion";
import validarIniciarSesion from "../validacion/validarIniciarSesion";
import router from "next/router";

const INTI_STATE = {
   
    email:'',
    password:''
 }

const Login = () => {
    const [error,setError]=useState(false)
    const {valores,errores, handleSubmit,handleChange,handleBlur}=useValidacion(INTI_STATE,validarIniciarSesion,login)
 
    const {email,password} = valores;
   async  function login(){
      try {
         const usuario = await firebase.login(email, password)
         router.push('/')
      } catch (err) {
         console.error(err.message)
         setError(err.message)
      }
   }
    return (
       <div>
         <Layout>
            <>
               <h1 css={css`text-align:center;margin-top:5rem;`}>Iniciar Sesión</h1>

               <Formulario onSubmit={handleSubmit} noValidate>
               {error && <Error>{error}</Error>}
                  
                  
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

                  <InputSubmit type="submit" value="Iniciar Sesión" />
               </Formulario>
            </>
         </Layout>
      </div>
    )
}

export default Login;
