import { useState } from 'react'
import {useContext} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/counter.jsx'
import { CounterContext } from './context/counter_context.jsx'
function App() {

  const counterState = useContext(CounterContext);
  console.log('context: ', counterState );  

  return (
    <>
    <h1>count is {counterState.count}</h1>
    <Counter />
    <Counter />
    <Counter />
    <Counter />
    </>
  )
}

export default App
