import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  data: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        data: action.payload, 
      };
    default:
      return state;
  }
};

function UseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state)
    useEffect(()=>{
        axios.get('https://api.adviceslip.com/advice').then((res)=>
        dispatch({type:"SUCCESS", payload: res.data}))
    },[])
  return (
    <div>{state.data.slip? state.data.slip.advice : "loading" }</div>
  )
}

export default UseReducer