import React, { useContext } from 'react'
import PostContext from '../context/PostContext'

function Home() {
  const { posts } = useContext(PostContext)

  return (
    <div className='p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-gray-100 min-h-screen'>
      {posts.map((item) => (
        <div key={item.id} className='bg-white p-5 rounded-2xl shadow-md border hover:shadow-xl transition-all duration-200'>
          <div className="content flex flex-col justify-between items-center min-h-full">
            <div className="topData text-center">
              <h1 className='text-lg font-bold text-gray-800 mb-2'>{item.title}</h1>
              <p className='text-gray-600 text-sm mb-4'>{item.body}</p>
            </div>
            <div className="cardBottom flex flex-col justify-between mt-2">
              <div className='flex flex-wrap gap-2 mb-3'>
                {item.tags.map((tag, idx) => (
                  <span key={idx} className='bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs'>
                    #{tag}
                  </span>
                ))}
              </div>
              <div className='flex justify-between text-sm text-gray-500'>
                <span>👍 {item.reactions.likes}</span>
                <span>👎 {item.reactions.dislikes}</span>
                <span>👁️ {item.views}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home
