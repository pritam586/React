import React ,{ useEffect, useState} from 'react'
import {useLoaderData} from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data , setData] = useState([])
    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/pritam433`)
    //     .then(res=>res.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
  return (
     <div className='text-center p-10 m-4 bg-gray-700 text-white '>Name : {data.login}
    <div>Github Follower : {data.followers}</div>
    <img className='mt-9 max-w-20 max-h-20 rounded-full '  src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github

export const GithubInfoloader=async()=>{
    const response = await fetch(`https://api.github.com/users/pritam433`)
    return response.json()
}