import {createContext, useState} from 'react'

export const CounterContext = createContext(null);

export const CounterProvider = (e) => {
    const[count, setCount]= useState(0);
return <CounterProvider value={{count, setCount}} >
    {e.children}
</CounterProvider>
}