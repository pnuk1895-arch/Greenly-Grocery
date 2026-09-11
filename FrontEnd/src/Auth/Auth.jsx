import { createContext, useContext, useState } from "react"

const AuthContext= createContext()

export function AuthProvider({children}){

    const [UserEntered, setUserEntered]= useState(false)

    return (
            <AuthContext.Provider value={{UserEntered, setUserEntered}} >
                {children}
            </AuthContext.Provider>
    )
}

export function useAuth(){

return useContext(AuthContext)
}