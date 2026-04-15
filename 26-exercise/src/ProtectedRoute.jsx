import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'
import { Navigate } from 'react-router'

export const ProtectedRoute = ({element}) => {

    const {isAuthenticated} = useContext(AuthContext)

    if(!isAuthenticated){
        return <Navigate to={"/login"} replace/>
    }
  return element ;
}
