import React from 'react';
import s from './Myposts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../Utils/Validators/validator";
import {Textarea} from "../../FormsControls/FormsControls";

const MyPosts = React.memo(props => {
        console.log('render')
        let maxLength70 = maxLengthCreator(70)
        let postElement = [...props.posts].reverse().map(p => <Post id={p.id} message={p.message} likesnumber={p.likesnumber}/>);
        let onAddPost = (values) => {
            props.addPost(values.postText)
        }
        const PostsForm = (props) => {
            return <form onSubmit={props.handleSubmit}>
                <Field component={Textarea} placeholder="Enter post text" name="postText"
                       validate={[requiredField, maxLength70]}/>
                {/*<Field ref={newPost} onChange={onPostChange} value={props.postText} />*/}
                <button>Add post</button>
            </form>
        }
        const PostsFormRedux = reduxForm({form: "postsFormRedux"})(PostsForm)
        return (<div className={s.posts}>
                My posts
                <PostsFormRedux onSubmit={onAddPost}/>
                <div className={s.posts}>
                    {postElement}
                </div>
            </div>
        )
    }
)
export default MyPosts;