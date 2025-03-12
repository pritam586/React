import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
    <>    
      {/* This is called fragment <></>  in react */}
    <App />

    <h1>Not able to add</h1>

    <p>This is done by Using Fragment </p>

    </>
 
)
