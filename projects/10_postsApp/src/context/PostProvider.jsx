import React, { useEffect } from 'react'
import PostContext from './PostContext.js' 
import { useState } from 'react'

const PostProvider = ({children}) => {
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    const fetchData = async()=>{
      const response = await fetch('https://dummyjson.com/posts')
      const data = await response.json()
      setPosts(data.posts)
    };
    fetchData();
  },[]);

  return (
    <PostContext.Provider value={{posts,setPosts}}>
    {children}
    </PostContext.Provider>
  )
};
  
export default PostProvider