import React, { useState } from 'react'
import '../App.css'
import {Navbar} from '../components/Navbar'
import { Link, Outlet, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
import { getProductById } from '../api/products';
import {removefromCart , addTocart} from '../utils/cartStorage';

import './ProductList.css'

function ProductDetails() {

  const {id} = useParams<{id:string}>();

  const {
    data : product , 
    isLoading, 
    isError , 
    error,
  } = useQuery<Product>({
    queryKey : ["product" , id], 
    queryFn : () => getProductById(id as string) ,
    enabled : typeof id === "string" , 
  });
  
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const AddtoCart = (id) =>{
      addTocart(id);
  }
  return (
    <>
   <div>
     <h2>ProductDetails for {id}</h2>
         <div className='productlist'>
              <div className='productcard'>
                  {product && Object.keys(product).map((title , i)=>{
                        return (   
                            <div key={i} className=''>
                                {title && title=="image" && (
                                    <>
                                    <img style={{height:"50px" , width:"50px"}} src={product[title]} alt="img" /></>
                                )}
                                {title && (title != "image") && (title !="rating ") &&(
                                         <> <strong>{title}</strong> : <span>{String(product[title])}</span></>
                                     )}                                     
                                    {title && title=="rating" && (
                                      <></>
                                    )}
                            </div>
                        )
                  })}
                   <Link to="customize">Customize Product</Link>
                    <button onClick={()=>{AddtoCart (id)}}> Add To Cart</button>
              </div>
        </div>
        <Outlet></Outlet>
   </div>
    </>
  )
}

export default ProductDetails
