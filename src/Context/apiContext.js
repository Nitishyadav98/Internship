import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();

export const ApiContextProvider = ({children})=>{

    const [products, setProducts] = useState({});

    const getDataFromApi = async()=>{
        try {
            const response = await fetch('https://dummyjson.com/products')
            const data = await response.json();
            // console.log(data)
            setProducts(data)
        } catch (error) {
            console.log("err", error.message);
        }

    }
    useEffect(()=>{
        getDataFromApi()
    },[])
    
    return <ApiContext.Provider value={products} >
        {children}
    </ApiContext.Provider>
}