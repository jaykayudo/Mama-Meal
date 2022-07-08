import React, {useState, useEffect, createContext} from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const onLogin = (email,password)=>{
        setIsLoading(true)
        const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (!email.match(emailFormat))
        {
            setError("Error: Enter a valid email Address")
            setIsLoading(false)
            return
        }else if(password.length < 7){
            setError("Error: Password should be atleast 7 Characters ")
            setIsLoading(false)
            return
        }else{
            setTimeout(()=>{
            setError(null)
            setUser({
                email: email,
                password: password
            })
            setIsAuthenticated(true)
            setIsLoading(false)
            }, 2000)
            
        }
    }
    const onLogout=()=>{
        setIsAuthenticated(false)
        setUser(null)
    }
    // useEffect(()=>{
    //     const firebaseApp = firebase.app.initializeApp(firebaseConfig);
    //     const auth = firebase.auth().getAuth(firebaseApp)
        
    // })
    return (
        <AuthContext.Provider
        value={{
            user,
            isLoading,
            error,
            onLogin,
            isAuthenticated,
            onLogout
        }}
        >
            {children}
        </AuthContext.Provider>
    );
}

