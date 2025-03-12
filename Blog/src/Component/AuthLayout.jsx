import React, {useState , useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({children , authentication = true}) {
    const navigate = useNavigate()
    const [loader , setLoader]  = useState(true)
    const authtatus = useSelector(state=>state.auth.status)

    useEffect(()=>{
       if(authentication && authtatus !== authentication){
        navigate("/login")
       }else if(!authentication && authtatus != authentication){
        navigate("/")
       }
        setLoader(false)

    },[authtatus,navigate,authentitacion])

  return loader?<h1>Loading...</h1> : <>{children}</>
}
