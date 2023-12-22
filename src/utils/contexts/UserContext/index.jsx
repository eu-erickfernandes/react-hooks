import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const UserContext = createContext()

export const useUserContext = () => {
    return useContext(UserContext)
}

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([1, 2, 3])

    

    return(
        <UserContext.Provider
            value={{
                users
            }}
        >
            { children }
        </UserContext.Provider>
    )
}