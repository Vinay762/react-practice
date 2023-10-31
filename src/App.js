import React, { useReducer } from "react";
import './App.css'

const initalState = 0;

const reducer = (state, action) => {
  switch(action){
    case 'increment' : {
      return state + 1
    }
    case 'decrement' : {
      return state -1;
    }
    case 'reset' : {
      return 0;
    }
    default : {
      return state
    }
  }
}

const App = () => {

  const [count, dispatch] = useReducer(reducer, initalState);
 
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={() => dispatch('increment')}>Increment By 1</button>
      <button onClick={() => dispatch('decrement')}>Decrement By 1</button>
      <button onClick={() => dispatch('reset')}>Reset To 0</button>
    </>
  )
}

export default App;