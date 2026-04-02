import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser]  = useState(null)

    useEffect(()=>{
        const storeUser = localStorage.getItem("user");
        if(setUser){
            setUser(JSON.parse(storeUser))
        }
    },[])

    //Register
    const register = (username, password) => {
        const newUser = {username, password};

        localStorage.setItem("user", JSON.stringify(newUser));
        setUser(newUser);
    }

    //Login
    const login = (username, password) => {
        const storeUser = JSON.parse(localStorage.getItem("user"));

        if(
            setUser &&
            storeUser.username == username &&
            storeUser.password == password
        ){
            setUser(storeUser)
            return true;
        }else{
            return false
        }
    }


    //Logout
    const logout  = () => {
        setUser(null)
        localStorage.setItem("user")
    };

    return(
        <UserContext.Provider value={{user, login, register, logout}} >
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;