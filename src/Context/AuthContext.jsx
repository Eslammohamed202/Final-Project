import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";


export let auth = createContext (null) 

export default function AuthContextProvider ({children}) {


    const [isLogin, setIsLogin] = useState(null)

    useEffect (() => {
        if (localStorage.getItem('user token'))
            setIsLogin(jwtDecode(localStorage.getItem('user token')))
    } , [])

    return <auth.Provider value={{isLogin , setIsLogin}}>
        {children}
    </auth.Provider>
}