import React from 'react'
import { NavLink } from 'react-router'

export const Header = () => {
  return (
    <div >
        <header className='flex justify-around item-center py-4 bg-white  shadow '>
            <div>
                <h1 className='text-gray-700 font-bold text-2xl'>Recipe Book</h1>
            </div>
            <div>
                <ul className='flex items-center gap-4'>
                    <li className='text-gray-600 text-md font-medium'>
                        <NavLink className={({isActive}) => isActive ? "text-red-500" : undefined} to="/">Home</NavLink>
                    </li>
                    <li className='text-gray-600 text-md font-medium'>
                        <NavLink className={({isActive}) => isActive ? "text-red-500" : undefined} to="/recipes">Recipes</NavLink>
                    </li>
                    <li className='text-gray-600 text-md font-medium'>
                        <NavLink className={({isActive}) => isActive ? "text-red-500" : undefined} to="/categories">Categories</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    </div>
  )
}
