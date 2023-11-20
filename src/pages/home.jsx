import React from 'react'
import { useSelector } from 'react-redux'

function Home() {
    const userName = useSelector((state) => state.user.username);
    console.log(userName)
    return (
        <>
            <h1>Hello {userName && userName}</h1>
            <p>This is home page</p>
        </>
    )
}

export default Home
