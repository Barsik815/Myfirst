import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hey', likesnumber: 18},
        {id: 2, message: "What's up?", likesnumber: 21},
        {id: 3, message: 'BlaBla', likesnumber: 13}
    ],
    postText: 'sth',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: state.postText, likesnumber: 0}],
                postText: ''
            }
        }
        case UPDATE_POST_TEXT: {
            return {
                ...state,
                postText: action.newText,
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile,
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const getUserProfile = (userId) => (dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        });
    }
export const updatePostTextActionCreator = (text) => ({
    type: UPDATE_POST_TEXT, newText: text
})

export default profileReducer;