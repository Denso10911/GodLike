import * as axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '24662418-0677-4287-b90c-bb5b13660889',
  },
})

export const usersAPI = {
  getUsers(pageSize, currentPage) {
    return instance.get(`users?count=${pageSize}&page=${currentPage}`)
  },
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId)
  },
}

export const authAPI = {
  getAuth() {
    return instance.get('auth/me')
  },
}

export const followAPI = {
  postFollow(id) {
    return instance.post('follow/' + id)
  },
  deleteFollow(id) {
    return instance.delete('follow/' + id)
  },
}
