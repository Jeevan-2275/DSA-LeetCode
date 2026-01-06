import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // State for storing posts
  const [posts, setPosts] = useState([])
  
  // State for loading
  const [loading, setLoading] = useState(true)
  
  // State for errors
  const [error, setError] = useState(null)

  // Fetch data when component loads
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        return response.json()
      })
      .then(data => {
        setPosts(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  // Show loading message
  if (loading) {
    return <div className="container"><h2>Loading...</h2></div>
  }

  // Show error message
  if (error) {
    return <div className="container"><h2>Error: {error}</h2></div>
  }
  // Display posts

  return (
    <div className="container">
      <h1>Posts from API</h1>
      <div className="posts-list">
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <h3>{post.id}. {post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
