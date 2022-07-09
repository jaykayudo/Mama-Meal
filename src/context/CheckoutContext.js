import React, { useState, useEffect, createContext } from 'react';

export const CheckoutContext = createContext();

export const CheckoutContextProvider = ({children})=>{
    const [restaurant, setRestaurant] = useState(null)
    const [order,setOrder] = useState([])
    const addToOrder = (newOrder)=>{
        setOrder(order=>{
            return [...order, newOrder]
        })
    } 
    const clearContext = ()=>{
        setRestaurant(null)
        setOrder([])
    }
    return (
        <CheckoutContext.Provider
        value={
            {
               restaurant,
               setRestaurant,
               order,
               addToOrder,
               clearContext,

            }
        }
        >
            {children}
        </CheckoutContext.Provider>
    );
}