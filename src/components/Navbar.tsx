import React from 'react'
import { NavLink } from 'react-router-dom'


export const  Navbar = () => {
  return (
   <nav>
        <NavLink
            to="/"
            style={({isActive})=>({
                color : isActive?"Red" :"black"
            })}
        >
            Home
        </NavLink>
         <NavLink
            to="/about"
            style={({isActive})=>({
                color : isActive?"Red" :"black"
            })}
        >
            About
        </NavLink>
         <NavLink
            to="/product"
            style={({isActive})=>({
                color : isActive?"Red" :"black"
            })}
        >
            Product
        </NavLink>
         <NavLink
            to="/cart"
            style={({isActive})=>({
                color : isActive?"Red" :"black"
            })}
        >
            Cart
        </NavLink>
   </nav>
  )
}