const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROCESS = 'TOGGLE_IS_FOLLOWING_PROCESS';

let initialState = {
    users: [],
    postText: 'sth',
    pageSize: 7,
    usersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProcess: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                        if (u.id === action.userId) return {...u, followed: true};
                        return u;
                    }
                )
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                        if (u.id === action.userId) return {...u, followed: false};
                        return u;
                    }
                )
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, usersCount: action.totalCount}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROCESS: {
            return {
                ...state, followingProcess: action.isFetching
                    ? [...state.followingProcess, action.userId]
                    : state.followingProcess.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const toggleIsFetching = (isFetching ) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProcess = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROCESS, isFetching, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})

export default usersReducer;