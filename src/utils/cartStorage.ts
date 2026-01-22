export const getCartItems = ()=>{
    try{
         const storedcartitem = localStorage.getItem("productIds");
         return storedcartitem?JSON.parse(storedcartitem) : [];
    }catch(error){
        console.log("fail");
        return [];
    }
   
};

export const addTocart = (itemId) =>{
    const cartItem = getCartItems();

    if(!cartItem.includes(itemId)){
       cartItem.push(itemId);
        localStorage.setItem("productIds" , JSON.stringify(cartItem));
        console.log(itemId , 'added');
    }
}

export const removefromCart = (itemId)=>{
    const cartItems = getCartItems().filter(id => id!==itemId);
    localStorage.setItem("productIds", JSON.stringify(cartItems));
}

export const clearCart = () =>{
    localStorage.removeItem("productIds");
}

