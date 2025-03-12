
import { useState, useEffect } from 'react'
import './App.css'
import { ThemeProvide } from './Context/Theme'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'

function App() {
   
  const [themeMode ,setThememode] = useState('light')

  const lightTheme = ()=>{
    setThememode("light")
  }

  const darkTheme =()=>{
    setThememode("dark")
  }

  // Actual Change in theme

  useEffect(() => {
   document.querySelector('html').classList.remove("light","dark")
   document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  

  return (
    <ThemeProvide value={{themeMode , lightTheme ,darkTheme}}>
             <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        
                        <ThemeButton/>

                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       

                        <Card/>
                    </div>
                </div>
            </div>
            </ThemeProvide>

  )
}

export default App
