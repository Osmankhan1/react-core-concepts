import { useState } from "react"

export default function Counter (){
    const [count, setCount] = useState(0);
     const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
     }
     const handleReduce = () => {
        const reCount = count - 1;
        setCount(reCount);
     }
    
    return(
        <div style={{border: '2px solid red', marginBottom: '10px', borderRadius: '10px'}}>
            <h2>Counter:{count}</h2>
            <button onClick={handleAdd} style={{background:"green" ,color:'white', marginBottom: '5px'}}>add</button>
            <button onClick={handleReduce} style={{background:'black', color:'white', marginLeft: '5px'}}>Reduce</button>
        </div>
    )
}