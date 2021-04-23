import React, {useRef} from 'react'

export default function Post({handleAddPost}) {
    const postInput = useRef()
    function handleAdd(){
        handleAddPost(postInput.current.value)
        postInput.current.value = ''
    }
    return (
        <div className="create-post-container">
            <div className="create-post">
            <textarea ref={postInput} rows="4" cols="50" placeholder="What's on your mind?"/>
            <br></br>
            <button onClick={handleAdd}>Post</button>
            </div>
        </div>
    )
}
