import { useContext } from "react";
import { ApiContext } from "../Context/apiContext";

import {MdDownloadDone} from 'react-icons/fa';

const Products =()=>{

    const {products} = useContext(ApiContext);

    return (
        <div className="flex justify-center items-center min-h-screen flex-wrap">
            {console.log({products})}
            {products.length>1 && 
            products.map((cur,i)=>{
                return( 
                    <div key={i} className="py-4 px-5 mx-4 my-3 shadow-md bg-white text-black rounded-md w-1/3">
                        <h3 className="text-2xl fond-bold">{cur.title}</h3>
                        <h1>{cur.brand}</h1>
                        <p>{cur.description}</p>
                    </div>
                )
            })
            
            }
        </div>
    )
}

export default Products;