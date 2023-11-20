import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '../store/slices/userSlice';
import { useNavigate } from 'react-router-dom'
function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const logIn = () => {
        console.log('logging in');
        dispatch(userActions.login({username: username}));
        navigate("/home");
    };

    return (
    <>
        <h1>Login</h1>
        <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        /><br/>
        <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        /><br/>
        <button onClick={logIn}>Login</button>
        </>
  );
}

export default Login;
