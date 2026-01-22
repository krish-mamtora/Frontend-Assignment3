import { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios';
import './ProductList.css'
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";

async function fetchProducts() {
    const res = await fetch("https://fakestoreapi.com/products/");
    if (!res.ok) throw new Error("Network response error");
    return res.json();
}

function ProductList() {

    // const [products , setProducts] = useState([]);
    // useEffect(()=>{
    //     axios.get('https://fakestoreapi.com/products/')
    //     .then(response=>setProducts(response.data))
    //     .catch(error => console.log(error));
    // },[])

    const { data, error, isLoading } = useQuery({
        queryKey: ["products"], 
        queryFn: fetchProducts,
    });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
    return (
        <>
        <h2>ProductList</h2>
        <div className='productlist'>
        {
            data.map((product , index)=>(
                <div className='productcard'>
                {product && Object.keys(product).map((title , i)=>{
                        // console.log(title ,',', product[title]);
                        return (
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
                        )
                    })
                }
                </div>
            ))
        }</div>
        </>
    )
}

export default ProductList
