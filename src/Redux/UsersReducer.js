const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
  users: [
    {
      id: 1,
      followed: true,
      name: 'Denis',
      secondName: 'Gerasymov',
      country: 'Ukraine',
      sity: 'Kyiv',
      status: 'Lorem ipsum dolor sit amet.',
      photos: {
        small:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrOdW6rrJSCxzu6TbqU7shTs3BUvXZKpcBQA&usqp=CAU',
      },
    },
    {
      id: 2,
      followed: false,
      name: 'Nina',
      secondName: 'Gerasymova',
      country: 'Ukraine',
      sity: 'Kyiv',
      status: 'Lorem ipsum dolor sit amet and bite some zdobuch',
      photos: {
        small:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv6IEmBVP3jAWho0A5yvd-a4gQ-WpVjpwydg&usqp=CAU',
      },
    },
    {
      id: 3,
      followed: false,
      name: 'Marina',
      secondName: 'Gerasymova',
      country: 'Poland',
      sity: 'Poznan',
      status: 'Lorem ipsum dolor sit amet.',
      photos: {
        small:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6naks-1uvS59bavB1gi1clShtsGB6AoLyw&usqp=CAU',
      },
    },
    {
      id: 4,
      followed: false,
      name: 'Alex',
      secondName: 'Griva',
      country: 'German',
      sity: 'Berlin',
      status: 'Lorem ipsum dolor sit ',
      photos: {
        small:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxZSFMnXkZDGsGwJbcnQEqW4_uzDZZvT6DRw&usqp=CAU',
      },
    },
  ],
}

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.id) {
            return { ...u, followed: true }
          }
          return u
        }),
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.id) {
            return { ...u, followed: false }
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

export const followUserAC = (id) => ({ type: FOLLOW, id })
export const unFollowUserAC = (id) => ({ type: UNFOLLOW, id })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default UsersReducer
