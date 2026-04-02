import { useContext, useState } from "react"
import UserContext from "../context/UserContext"


const Login = () => {
    const {login} = useContext(UserContext);
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        const succes = login(username, password)
        if(succes){
            alert ("Login Successfully")
        }else{
            alert("Invalid credentials")
        }

    }
    return(
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            />
            {' '}
            <input type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    )
}

export default Login;