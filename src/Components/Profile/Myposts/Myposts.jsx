import React from 'react'
import s from './Myposts.module.css'
import Post from "./Post/Post";

const Myposts = (props) => {


    let PostElement = props.posts.map (p=> <Post message={p.message} likesnumber={p.likesnumber}/>)

    return (<div className={s.posts}>
            My posts
            <div>
                <div><textarea name="" id="" cols="30" rows="3"/></div>
            <div><button>New post</button></div>
            </div>
            <div className={s.posts}>
            {PostElement}
            </div>
        </div>
    )
}

export default Myposts;