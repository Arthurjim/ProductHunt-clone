import app from 'firebase/app'
//habilitar la autenticacion
import 'firebase/auth'
import firebaseConfig from './config'
 
class Firebase {
    constructor(){
        // app.initializeApp(firebaseConfig)

        !app.apps.length && app.initializeApp(firebaseConfig);
        this.auth = app.auth();
    }
    //registra un usuario
    async registrar(nombre,email, passwoword){
        console.log('se ejecuta')
        const nuevoUsaurio = await this.auth.createUserWithEmailAndPassword(email,passwoword )

        return await nuevoUsaurio.user.updateProfile({
            displayName:nombre
        })
    }
    //inicia sesion del usuario
    async login(email, password){
        return this.auth.signInWithEmailAndPassword(email,password);
         
    }

    //cerrar Sesion
    async singOutuser(){
        await this.auth.signOut(); 
    }
}

const firebase = new Firebase()

export default firebase;