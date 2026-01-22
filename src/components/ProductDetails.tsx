import React, { useState } from 'react'
import '../App.css'
import {Navbar} from '../components/Navbar'
import { Link, Outlet, useParams } from 'react-router-dom'

function ProductDetails() {

    const {productID} = useParams();

  return (
    <>
   <div>
     <h2>ProductDetails for {productID}</h2>
        <Link to="customize">Customize Product</Link>
        <Outlet></Outlet>
   </div>
    </>
  )
}

export default ProductDetails
