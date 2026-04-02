import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Register = ()=> {
    const{register} = useContext(UserContext)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        register(username, password)
        alert("Registerd successfully")
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>

            <input type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            />
            {' '}
            <input type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="sumbit">Register</button>
        </form>
    )
}  

export default Register;