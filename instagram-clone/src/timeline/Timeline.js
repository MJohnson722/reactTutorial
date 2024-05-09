import React, { useState } from 'react';
import Suggestions from './Suggestions';
import "./Timeline.css";
import Post from './posts/Post';


function Timeline() {
    const [posts, setPosts] = useState([
      {
        user: "redian_",
        postImage: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
        likes: 12,
        timestamp: "2d"
      },
      {
        user: "johndoe",
        postImage: "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
        likes: 57,
        timestamp: "12h"
      },
      {
        user: "micahJ03",
        postImage: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
        likes: 300,
        timestamp: "24d"
      },
      {
        user: "shm33z",
        postImage: "https://huggingface.co/datasets/huggingfacejs/tasks/resolve/main/image-classification/image-classification-input.jpeg",
        likes: 2040,
        timestamp: "26d"
      }
    ]);
  
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map(post => (
            <Post 
              user={post.user}  
              postImage={post.postImage} 
              likes={post.likes} 
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  )
}

export default Timeline