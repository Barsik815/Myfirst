const FOLLOWING = 'ADD-POST';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [],
    postText: 'sth',
    pageSize: 7,
    usersCount: 0,
    currentPage:1,
    isFetching: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOWING:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) return { ...u, followed: !u.followed };
                    return u;
                })
            }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, usersCount: action.totalCount }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        default:
            return state;
    }
}

export const followingAC = (userId) => ({ type: FOLLOWING, userId })
export const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching  })
export const setUsersAC = (users) => ({ type: SET_USERS, users})
export const setTotalUsersCountAC = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount})
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage})

export default usersReducer;