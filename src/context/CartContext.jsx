import { createContext, useState } from "react";
import React from "react";

export const CartContext=createContext();

const CartProvider=({children})=>{
    const [cartitems,setcartitems]=useState([]);

    const addtocart=(product,qty=1)=>{
        setcartitems((prev)=>{
            const existingitem=prev.find((item)=>
                 item.id ===product.id
            )

            if(existingitem){
                return prev.map((item)=>
                    item.id ===product.id ? {...item,qty:item.qty+qty} :item
                )
            }
            return [...prev,{...product,qty}]

        })
        

    }
     const removeitems=(id)=>{
            setcartitems((prev)=>
                prev.filter((item)=>item.id !==id)
            )
        }



        const increaseqty=(id)=>{
            setcartitems((prev)=>
                prev.map((item)=>
                    item.id ===id ? {
                        ...item, qty:item.qty+1
                    } : item
                )
            )
        }


        const decreaseqty=(id)=>{
            setcartitems((prev)=>
                prev.map((item)=>
                    item.id === id ? { ...item, qty:item.qty > 1 ? item.qty -1 :1}:item
                )
            )
        }

return(
    <CartContext.Provider 
    value={{
        increaseqty,
        decreaseqty,
        addtocart,
        cartitems,
        removeitems
    }}>
        {children}
    </CartContext.Provider>
)
}
export default CartProvider;

