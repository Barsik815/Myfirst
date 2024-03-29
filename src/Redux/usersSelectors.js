import {createSelector} from "reselect";

export const getUsersSelector = (state) => {
    return state.usersPage.users;
}
export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true);
})

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getUsersCount = (state) => {
    return state.usersPage.usersCount;
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}
export const getFollowingProcess = (state) => {
    return state.usersPage.followingProcess;
}
export const getIsAuth = (state) => {
    return state.auth.isAuth;
}

