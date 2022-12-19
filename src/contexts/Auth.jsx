import React, { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { useNavigate } from 'react-router'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
  const [User,setUser] = useState(JSON.parse(localStorage.getItem('user')))

  const navigate = useNavigate()

  const login = ((user,token)=>{
    setUser({user})
    navigate('/')
    localStorage.setItem('user',JSON.stringify(user))
    localStorage.setItem('token',JSON.stringify(token))
  })

  const HandleLogOut = (()=>{
    setUser(null)
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    navigate('/login')
  })

  return (
    <AuthContext.Provider value={{authenticated: !!User,login,User,HandleLogOut}}>
      {children}
    </AuthContext.Provider>
  )
}
