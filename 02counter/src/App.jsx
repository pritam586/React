import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
   let [counter ,setcounter ] = useState(15)
   
   const addvalue = ()=>{
    if(counter<20){
    setcounter(counter+1)
    }
   }

   const removeValue= ()=>{
    if(counter>0){
      setcounter(counter - 1)
    }
   }
  return (
    <>
      <h1>Hello World</h1>
      <h2>Counter value : {counter}</h2>
      <button 
      onClick={addvalue}
      >Add Value</button><br />
      <button
      onClick={removeValue}
      >Remove value</button>
    </>
  )
}

export default App
