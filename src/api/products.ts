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
    const response = await api.get<Product>(`/product/&{id}`);
}