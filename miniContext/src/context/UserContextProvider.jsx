
import React, {useState}from "react";
import UserContext from "./UserContext";


const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)

    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}
export default  UserContextProvider;


// Creates a global user state
// Makes it accessible across your app
// Avoids passing props manually through many components