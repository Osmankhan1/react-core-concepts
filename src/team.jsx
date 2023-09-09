import { useState } from "react"

export default function Team(){

    const [team, setTeam] = useState(11);
    const handleAdd = () => {
        const handleTeam = team + 1;
        setTeam(handleTeam);
    }
    const handleReduce = () =>{
        const handleRed = team - 1;
        setTeam(handleRed);
    }

    const styleTeam ={
        border:'2px solid green',
        borderRadius: '10px',
        padding : '15px',
        marginBottom: '10px',
    }
    const styleBtn = {
        backgroundColor: 'pink',
        
    }
    const styleBtn2 ={
        backgroundColor: 'blue',
        color: 'white',
        marginLeft: '5px'
    }
    return(
        <div style={styleTeam}> 
            <h2>Players:{team}</h2>
            <button style={styleBtn} onClick={handleAdd}>Add</button>
            <button style={styleBtn2} onClick={handleReduce}>Remove</button>
        </div>
    )
}