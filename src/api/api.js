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
        return instance.delete(`follow/${userId}`);
    },
    followAPI(userId) {
        return instance.post(`follow/${userId}`, {},);
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
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile);
    },
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => response.data);
    },
    login(email, password, rememberMe, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha},).then(response => response.data);
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`).then(response => response.data);
    }
}
