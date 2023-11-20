import React from 'react'
import { useEffect } from 'react'
import {useSelector, useDispatch} from "react-redux"
import { getCart } from '../store/slices/cartSlice'
import { Link } from 'react-router-dom'
import CartList from '../component/CartList'

function Cart() {
    const dispatch = useDispatch(); 
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const cart = useSelector((state) => state.cart);
    useEffect(() => {
        if (isAuthenticated) {
          dispatch(getCart());
        }
      }, [dispatch, isAuthenticated]);
    return (
        <>
            {isAuthenticated ? 
            <>
                <CartList items={cart.items}/> 
                <div style={{padding: "1rem"}}>Total Price: {cart.total}</div>
            </>
            : <h1>You can't view cart, please <Link to="/login">Log In</Link></h1>}
            {
                cart.loading && <p>Loading Data....</p>
            }
            {
                cart.error && <p>{cart.error}</p>
            }
        </>
    )
}

export default Cart
