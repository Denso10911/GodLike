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
  postFollow(id) {
    return instance.post('follow/' + id)
  },
  deleteFollow(id) {
    return instance.delete('follow/' + id)
  },
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get('profile/' + userId)
  },

  getStatus(userId) {
    return instance.get('profile/status/' + userId)
  },

  updateStatus(status) {
    return instance.put('profile/status', { status: status })
  },
}

export const authAPI = {
  getAuth() {
    return instance.get('auth/me')
  },
}
