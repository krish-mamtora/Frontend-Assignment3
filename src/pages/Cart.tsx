import { useState } from 'react'
import '../App.css'
import {Navbar} from '../components/Navbar'
import { getCartItems } from '../utils/cartStorage';
import { useQueries } from '@tanstack/react-query';
import { getProductById } from '../api/products';

function Cart() {

  const cartIds = getCartItems();

  const productQueries = useQueries({
    queries : cartIds.map((id)=>({
      queryKey : ["product" ,id],
      queryFun : () =>getProductById(id),
      // enabled : 
    }))
  })
  const products = productQueries.map(q=>q.data);
  console.log(products);
return (
        <>
       <h2>Cart List</h2>
        <div className='productlist'>
        {
            products?.map((product , index)=>(
                <>
                 {/* <div className='productcard'> */}
                {
                product && Object.keys(product).map((title , i)=>{
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
                {/* </div> */}
                 </>

            ))
        }</div>
        </>
    )
}

export default Cart
