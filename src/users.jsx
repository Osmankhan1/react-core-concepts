import { useEffect, useState } from "react"

export default function Users(){
    const [users, setusers] =useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setusers(data));
    },[])
    return(
        <div>
            <h2>User : {users.length}</h2>
        </div>
    )
}