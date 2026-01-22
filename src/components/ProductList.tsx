import { useEffect, useState } from 'react'
import '../App.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './ProductList.css'
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { getProducts  } from '../api/products';
import type {Product} from "../api/products"

function ProductList() {

    const {
        data : products , 
        isLoading , 
        isError , 
        error ,
    } = useQuery<Product[]>({
        queryKey : ["products"],
        queryFn : getProducts,
    })

    const navigate = useNavigate();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
    return (
        <>
        <h2>ProductList</h2>
        <div className='productlist'>
        {
            products?.map((product , index)=>(
                <>
                <div className='productcard'>
                {product && Object.keys(product).map((title , i)=>{
                        // console.log(title ,',', product[title]);
                        return (
                            <>
                            <div key={i} className=''>
                                
                                {title && title=="image" && (
                                    <>
                                    <img style={{height:"50px" , width:"50px"}} src={product[title]} alt="img" /></>
                                )}

                                {title && (title=="title" || title=="price"
                                     || title=="category") &&(
                                         <> <span>{title}</span> : <span>{String(product[title])}</span></>
                                     )}                                     

                            </div>
                            </>
                        )
                    })
                }
                </div>
                <button onClick={() => navigate(`/shop/${index}`)}>ViewDetials</button> </>

            ))
        }</div>
        </>
    )
}

export default ProductList
