import {BrowserRouter as Router,Routes,Route, Navigate } from "react-router-dom"
import {Login} from '../components/login/Login'
import {Dashboard} from '../components/dashboard/Dashboard'
import { useContext } from "react"
import { AuthProvider, AuthContext} from "../contexts/Auth"

export const Routers = () => {
    
    const Private = (({children})=>{
        const { authenticated } = useContext(AuthContext)
        if (!authenticated) {
            return <Navigate to="/login"/>
        }
        return children
    })

    const LoginRoute = (({children})=>{
        const { authenticated } = useContext(AuthContext)
        if (authenticated) {
            return <Navigate to="/"/>
        }
        return children
    })

  return (
    <Router>
        <AuthProvider>
            <Routes>
               <Route exact path="/" element={<Private><Dashboard/></Private>}/>
               <Route exact path="/login" element={<LoginRoute><Login/></LoginRoute>}/>
            </Routes>
        </AuthProvider>
    </Router>
  )
}
