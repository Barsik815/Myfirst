import React from 'react';
import s from './Myposts.module.css';
import Post from "./Post/Post";

const Myposts = (props) => {
    let postelement = props.posts.map(p=> <Post  id={p.id} message={p.message} likesnumber={p.likesnumber}/>);

    let newPost = React.createRef();

    let addPost = () => {
        props.addPost();
        props.updatePostText('');
    }
    let onPostChange = () =>{
        let text = newPost.current.value;
        props.updatePostText(text);
    }

    return (<div className={s.posts}>
            My posts    
            <div>
                <div><textarea ref={newPost} onChange={onPostChange} value={props.postText}/></div>
            <div><button onClick={addPost}>Add post</button></div>
            </div>
            <div className={s.posts}>
            {postelement}
            </div>
        </div>
    )
}

export default Myposts;