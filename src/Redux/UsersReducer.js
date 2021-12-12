const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
  users: [
    {
      userId: 1,
      myFriend: true,
      firstName: 'Denis',
      secondName: 'Gerasymov',
      country: 'Ukraine',
      sity: 'Kyiv',
      credo: 'Lorem ipsum dolor sit amet.',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrOdW6rrJSCxzu6TbqU7shTs3BUvXZKpcBQA&usqp=CAU',
    },
    {
      userId: 2,
      myFriend: false,
      firstName: 'Nina',
      secondName: 'Gerasymova',
      country: 'Ukraine',
      sity: 'Kyiv',
      credo: 'Lorem ipsum dolor sit amet and bite some zdobuch',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv6IEmBVP3jAWho0A5yvd-a4gQ-WpVjpwydg&usqp=CAU',
    },
    {
      userId: 3,
      myFriend: false,
      firstName: 'Marina',
      secondName: 'Gerasymova',
      country: 'Poland',
      sity: 'Poznan',
      credo: 'Lorem ipsum dolor sit amet.',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6naks-1uvS59bavB1gi1clShtsGB6AoLyw&usqp=CAU',
    },
    {
      userId: 4,
      myFriend: false,
      firstName: 'Alex',
      secondName: 'Griva',
      country: 'German',
      sity: 'Berlin',
      credo: 'Lorem ipsum dolor sit ',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxZSFMnXkZDGsGwJbcnQEqW4_uzDZZvT6DRw&usqp=CAU',
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
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      }

    default:
      return state
  }
}

export const followUserAC = (userId) => ({ type: FOLLOW, userId })
export const unFollowUserAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default UsersReducer
