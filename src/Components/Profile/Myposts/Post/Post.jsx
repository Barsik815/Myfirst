import React from 'react'
import style from './Post.module.css'

const Post = (props) => {
    return (<div className={style.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUjtdeOsoKOYUO7ie8SZMlxfHKtQBMf7l0Wg&usqp=CAU"
                alt=""/>
            {props.message}
            {props.likesnumber}
            <button/>
        </div>
    )
}
export default Post;