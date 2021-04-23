import React, {useState} from 'react'
import Post from './Post'

export default function PostList({posts}) {
    
    return (
        <div>
            {posts.map(post => {
                return <Post post={post}/>
            })}
        </div>
    )
}


