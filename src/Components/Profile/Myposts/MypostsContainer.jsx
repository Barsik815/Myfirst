import React from 'react';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../Redux/ProfileReducer';
import Myposts from './Myposts';
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return {
        postText: state.profilePage.postText,
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (postText) => {
            dispatch(addPostActionCreator(postText))
        },
        onPostChange: (text) => {
            let action = updatePostTextActionCreator(text);
            dispatch(action)
        }
    }
}

const MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts);

export default MypostsContainer;