import React, { useState,useEffect } from 'react'
import firebase from '../firebase'

function useAuth(){
    const [user, setUser]=useState()

    useEffect(()=>{
        const unsuscribe = firebase.auth.onAuthStateChanged(usuario=>{
            if(usuario){
                setUser(usuario)
            }else{
                setUser()
            }
        });
        return ()=>unsuscribe();
    },[])
    return user;
    
}

export default useAuth