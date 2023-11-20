import React from 'react'
import { useState } from 'react';
function CartList(props) {
    const [name, setName] = useState('');
    const [qty, setQty] = useState('');
    const [price, setPrice] = useState('');
    const {items} = props
    
    return (
        <>
            <h1>Cart List</h1>
            {items && 
                items.map(item => 
                    <div style={{display: "flex", justifyContent:"space-between",  padding:"2rem", gap:"1rem"}}>
                        <span>Name: {item.name}</span>
                        <span>Qty: {item.quantity}</span>
                        <span>Price: {item.price}</span>
                        <span>Total: {item.quantity * item.price}</span>
                    </div>
                )
            }
        </>
    )
}

export default CartList
