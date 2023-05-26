import React, { useRef, useContext } from 'react'
import { userContext } from './Context';

function HookRef() {
    const user = useContext(userContext)
    const inputElement = useRef();

    const focusInput = () => {
      inputElement.current.focus();
    };
  
    return (
      <>
        <h1>{user}</h1>
        <input type="text" ref={inputElement} />
        <button onClick={focusInput}>Focus Input</button>
      </>
    );
}

export default HookRef