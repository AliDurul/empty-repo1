import { Outlet } from "react-router-dom"
import { Navigate } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext"

export const PrivateRoute = () => {



    const {currentUser} = useAuthContext()
    return currentUser ? <Outlet /> : <Navigate to="/"/>
}

