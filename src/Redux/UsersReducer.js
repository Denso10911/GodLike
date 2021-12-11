const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

let initialState = {
  users: [
    {
      userId: 1,
      myFriend: true,
      firstName: 'Denis',
      secondName: 'Gerasymov',
      country: 'Ukraine',
      sity: 'Kyiv',
      avatar: 'foto',
    },
    {
      userId: 2,
      myFriend: false,
      firstName: 'Nina',
      secondName: 'Gerasymova',
      country: 'Ukraine',
      sity: 'Kyiv',
      avatar: 'foto',
    },
    {
      userId: 3,
      myFriend: false,
      firstName: 'Marina',
      secondName: 'Gerasymova',
      country: 'Poland',
      sity: 'Poznan',
      avatar: 'foto',
    },
    {
      userId: 4,
      myFriend: false,
      firstName: 'Alex',
      secondName: 'Griva',
      country: 'German',
      sity: 'Berlin',
      avatar: 'foto',
    },
  ],
}

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.userId === action.userId) {
            return { ...u, myFriend: true }
          }
          return u
        }),
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.userId === action.userId) {
            return { ...u, myFriend: false }
          }
          return u
        }),
      }

    default:
      return state
  }
}

export const followUserAC = (userId) => ({
  type: FOLLOW,
  userId,
})
export const unFollowUserAC = (userId) => ({
  type: UNFOLLOW,
  userId,
})

export default UsersReducer
