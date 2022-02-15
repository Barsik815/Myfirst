import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../Utils/objectHelpers";

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
    pageSize: 11,
    usersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProcess: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
        case
        UNFOLLOW:
            return {
                ...state, users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        case
        SET_USERS: {
            return {...state, users: action.users}
        }
        case
        SET_TOTAL_USERS_COUNT: {
            return {...state, usersCount: action.totalCount}
        }
        case
        SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case
        TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case
        TOGGLE_IS_FOLLOWING_PROCESS: {
            return {
                ...state, followingProcess: action.isFetching
                    ? [...state.followingProcess, action.userId]
                    : state.followingProcess.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

export const acceptFollow = (userId) => ({type: FOLLOW, userId})
export const acceptUnfollow = (userId) => ({type: UNFOLLOW, userId})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProcess = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROCESS, isFetching, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})

export const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProcess(true, userId));
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) dispatch(actionCreator(userId));
    dispatch(toggleFollowingProcess(false, userId))
}

export const requestUsers = (currentPage, pageSize) => {
        return async (dispatch) => {
            dispatch(toggleIsFetching(true));
            let data = await usersAPI.requestUsers(currentPage, pageSize)
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        }
    };
export const follow = (userId) => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, userId, usersAPI.followAPI, acceptFollow);
    }
};
export const unfollow = (userId) => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, userId, usersAPI.unfollowAPI, acceptUnfollow);
    }
};

export default usersReducer;