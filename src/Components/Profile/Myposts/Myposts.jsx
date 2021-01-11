import React from 'react'
import style from './Myposts.module.css'
import Post from "./Post/Post";

const Myposts = () => {
    return (<div>
            My posts
            <div>
                <textarea name="" id="" cols="30" rows="3"/>
                <button>New post</button>
            </div>
            <div className={style.posts}>
                <Post message='How are you?' likesnumber='18'/>
                <br/>
                <Post message='Hello' likesnumber='32'/>

            </div>
        </div>
    )
}
export default Myposts;