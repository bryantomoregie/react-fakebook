import React, {useState} from 'react'
import CreatePost from './Components/CreatePost'
import PostList from './Components/PostList'
import { v4 as uuidv4 } from 'uuid';
import './Style/App.css'

function App() {
  const [posts, setPosts] = useState(seedPost)

  function handleAddPost(post){
    const newPost = {
      id: uuidv4(),
      text: post
    }
    setPosts([...posts, newPost])
  }
  return (
   <div className="app-container">
   <h1 className="title">Fakebook</h1>
   <div>
     <CreatePost handleAddPost={handleAddPost}/>
     <PostList posts={posts} />
   </div>
   </div>
  );
}

const seedPost = [
  {
      id: uuidv4(),
      text: "This is an example post."
  },
  {
      id: uuidv4(),
      text: "Cool. Cool."
  },
  {
      id: uuidv4(),
      text: "Good luck!"
  }
]

export default App;
