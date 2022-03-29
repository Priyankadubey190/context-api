import { createContext, useState } from "react";

export const AuthContext = createContext()

 
export const AuthContextProvider= ({children})=>{

    const [token, setToken]= useState("login_karo")
    const handletoken = (value) =>{
        console.log(value)
        setToken(value);
        
    }
    console.log(token)
  return  <AuthContext.Provider value={{token , handletoken}} >{children}</AuthContext.Provider>
}