import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'
import { useNavigate } from 'react-router';

const Login = () => {
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = () => {
        login();
        navigate("/create")

    }
  return (
    <div className='space-y-2'>
        <h2 className='text-gray-700 font-bold'>Login page</h2>
        <p className='text-gray-600 text-md'>you have to login to access create post</p>
        <button onClick={handleLogin} className='bg-blue-500 px-6 py-1 text-white rounded-md'>log In</button>
    </div>
  )
}

export default Login