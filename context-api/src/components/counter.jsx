import React from 'react'
import { useContext } from 'react';
import { CounterContext } from '../context/counter_context';
const  Counter= ()=> {
  const thiscounterContext = useContext(CounterContext)

  return (
    <div>

    <button onClick={()=>{
    thiscounterContext.setCount(thiscounterContext.count + 1)
    }} 
    >Increment</button>

    <button onClick={()=>{
      thiscounterContext.setCount(thiscounterContext.count - 1)
    }}
    >Decrement</button>
    </div>
    
  );
};

export default Counter