
import './App.css'
import Login from './component/Login'
import Profile from './component/Profile'
import Register from './component/Register'
import UserContextProvider from './context/UserContextProvider'

function App() {
  return (
    <UserContextProvider>
    <Login />
    {/* <Register/> */}
    <Profile />
    </UserContextProvider>
  )
}
export default App
