import axios from 'axios';
import React, { useEffect, useReducer } from 'react';

const initialState = {
    data: []
  }  
  const reducer = (state, action) =>{
    switch(action.type){
        case "SUCCESS":
            return {
                data: action.payload
            }
        default:
            return state;
    }
  }
function ReducerC() {
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(()=>{
    axios.get('https://api.adviceslip.com/advice').then((res)=>{
        dispatch({type:"SUCCESS",payload:res.data})
    })
  },[])
  console.log(state)
  return (
    <div>{state.data.slip && state.data.slip.advice}</div>
  )
}

export default ReducerC