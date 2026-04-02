import { useContext } from "react"
import UserContext from "../context/UserContext"


const Profile = () => {
    const {user, logout} = useContext(UserContext);

    if(!user) return <h2>Please login first</h2>

    return (
        <div>
            <h2>Welcome, {user.username}</h2>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Profile;