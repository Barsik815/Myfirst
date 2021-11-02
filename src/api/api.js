import * as axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': '013ca442-f11a-42ca-a9f9-8bea632fee4b'
    }
})


export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`,
    )
        .then(response => response.data)
};

export const unfollowAPI = (user) => {
    return instance.delete(`follow/${user.id}`,
    )
        .then(response => response.data)
}

export const followAPI = (user) => {
    return instance.post(`follow/${user.id}`, {},
    )
        .then(response => response.data)

}

