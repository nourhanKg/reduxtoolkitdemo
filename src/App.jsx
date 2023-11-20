import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import {Link, BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { userActions } from './store/slices/userSlice';
import Login from './pages/login'
import Home from './pages/home'
import Cart from './pages/cart'
function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated)
  const logOut = () => {
    console.log("logging out")
    dispatch(userActions.logout());
  }
  return (
        <Router>
            <div style={{display: "flex", justifyContent:"start", backgroundColor:"black", padding:"2rem", gap:"1rem"}}>
              <Link style={{color:"wheat" }} to="/home">Home</Link>
              <Link style={{color:"wheat" }} to="/cart">Cart</Link>
              {isAuthenticated ? <Link style={{color:"wheat" }} to="/login" onClick={logOut}>Log Out</Link>: ""}
            </div>
            <Routes>
              <Route path="/" element={isAuthenticated ? <Home /> : <Login />}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path='/login' element={<Login/>}/>
            </Routes>
        </Router>
  )
}

export default App
