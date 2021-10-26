const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'Hey', likesnumber: 18 },
        { id: 2, message: "What's up?", likesnumber: 21 },
        { id: 3, message: 'BlaBla', likesnumber: 13 }
    ],
    postText: 'sth'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, { id: 5, message: state.postText, likesnumber: 0 }],
                postText: ''
            }
        }
        case UPDATE_POST_TEXT: {
            return {
                ...state,
                postText: action.newText,
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updatePostTextActionCreator = (text) => ({
    type: UPDATE_POST_TEXT, newText: text
})

export default profileReducer;