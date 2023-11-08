import { Outlet } from "react-router-dom"
import Home from "../pages/home/home"

export const isAuth = () => {
    return JSON.parse(localStorage.getItem('loggedInUser'))
}

const ProtectedRoutes = () => {
    const auth = isAuth()

    return auth ? <Outlet /> : <Home/>
}

export default ProtectedRoutes