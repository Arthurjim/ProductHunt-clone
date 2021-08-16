import '../styles/globals.css'
import App from 'next/app'
import firebase,{FirebaseContext} from '../firebase'

function MyApp({ Component, pageProps }) {
  return( 
    
    <FirebaseContext.Provider value={{firebase}}> 
     <Component {...pageProps} />
    </FirebaseContext.Provider>
    )


}

export default MyApp


