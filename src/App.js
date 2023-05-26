import React, {useEffect, useState} from "react";
import axios from 'axios';

const App = () => {
    const[slip, setSlip]= useState([])
    const[changeAdv,setAdv] = useState(false)
    const changeAdvice = () =>{
      setAdv(!changeAdv)
    }
    useEffect(()=>{
      axios.get('https://api.adviceslip.com/advice').then((res)=>{
        console.log(res.data)
        setSlip(res.data)
      })      
    },[changeAdv])
    // console.log(slip.slip.advice)
    return (
      <>
       <h2>{slip.slip ? slip.slip.advice : "loading"}</h2>
       <button onClick={()=>changeAdvice()}>Change Advice</button>
      </>
    )
  }

export default App;
