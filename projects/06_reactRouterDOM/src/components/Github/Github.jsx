import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = React.useState([])
    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/akanksha10029?timestamp=${Date.now()}`)
    //     .then(response => response.json())
    //     .then((data) => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])

  return (
    <div className="flex flex-col items-center bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto my-10">
        <img src={data.avatar_url} alt="GitHub Profile" className="w-32 h-32 rounded-full shadow-lg" />
        <h2 className="text-2xl font-semibold mt-3">{data.name || "No Name Available"}</h2>
        <p className="text-gray-400 text-sm">{data.bio || "No Bio Available"}</p>
        <div className="mt-4 w-full px-6">
            <div className="flex justify-between text-lg">
                <span>Followers: <strong>{data.followers}</strong></span>
                <span>Following: <strong>{data.following}</strong></span>
            </div>
            <div className="flex justify-between text-lg mt-2">
                <span>Repos: <strong>{data.public_repos}</strong></span>
            </div>
        </div>
        <a 
            href={data.html_url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-4 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-all"
        >
            View Profile
        </a>
    </div>
  )
}

export default Github

export const githubInfoLoader = async()=>{
    const response = await fetch(`https://api.github.com/users/akanksha10029?timestamp=${Date.now()}`)
    if(!response.ok) throw new Error("Failed to fetch data")
    return response.json()
}