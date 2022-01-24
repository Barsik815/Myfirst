import * as axios from "axios";

export const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': '013ca442-f11a-42ca-a9f9-8bea632fee4b'
    }
});

export const usersAPI = {
    requestUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    unfollowAPI(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data);
    },
    followAPI(userId) {
        return instance.post(`follow/${userId}`, {},).then(response => response.data);
    },
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => response.data);
    },
    login(email, password, rememberMe) {
        return instance.post(`/auth/login`, { email, password, rememberMe },).then(response => response.data);
    },
    logout() {
        return instance.delete (`/auth/login`);
    }
}
