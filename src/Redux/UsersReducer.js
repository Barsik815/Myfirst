const FOLLOW = 'ADD-POST';
const UNFOLLOW = 'UPDATE-POST-TEXT';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [],
    postText: 'sth'
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) return { ...u, following: true };
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) return { ...u, following: false };
                    return u;
                })
            }
        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users] }
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;