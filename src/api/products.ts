import api from "./axios"

export interface Product {
    id: number;
    title : string;
    price : number ;
    description : string ;
    image : string ;
}

export const getProducts = async () =>{
    const response = await api.get<Product[]>("/products");
    return response.data;
}

export const getProductById = async(id : string) =>{
    if(!id){
        throw new Error ("product ID is required");
    }
    const response = await api.get(`/products/${id}`);
    if(!response.data){
        throw new Error("Product not found");
    }
    return response.data;
}