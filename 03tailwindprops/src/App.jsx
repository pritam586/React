import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-600 text-black rounded-xl p-4 mb-6'>Tailwind Test</h1>
      < Cards username="Hello" btntext= "Click"/>
      < Cards username="hey" btntext="Visit"/>
    </>
  )
}

export default App
