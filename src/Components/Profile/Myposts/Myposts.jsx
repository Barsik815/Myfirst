import React from 'react'
import s from './Myposts.module.css'
import Post from "./Post/Post";

const Myposts = () => {
    return (<div className={s.posts}>
            My posts
            <div>
                <div><textarea name="" id="" cols="30" rows="3"/></div>
            <div><button>New post</button></div>
            </div>
            <div className={s.posts}>
                <Post message='How are you?' likesnumber='18'/>
                <br/>
                <Post message='Hello' likesnumber='32'/>
            </div>
        </div>
    )
}

export default Myposts;