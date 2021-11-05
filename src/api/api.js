import * as axios from "axios";

export const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': '013ca442-f11a-42ca-a9f9-8bea632fee4b'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    unfollowAPI(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },
    followAPI(userId) {
        return instance.post(`follow/${userId}`, {},).then(response => response.data)
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => response.data)
    }
}
