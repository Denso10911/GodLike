const NEW_POST = 'NEW-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
  posts: [
    { id: 1, text: 'What are you thinking for', likes: 10 },
    { id: 2, text: 'About this game', likes: 15 },
  ],
  forumToopicsData: ['Clan', 'Guides and Tutorials', 'Tavern'],
  newPostText: '',
}

const ForumReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_POST: {
      debugger
      let post = {
        id: state.posts.length + 1,
        text: state.newPostText,
        likes: 0,
      }
      return {
        ...state,
        posts: [...state.posts, post],
        newPostText: '',
      }
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      }
    }
    default:
      return state
  }
}

export const sentNewPost = () => ({ type: NEW_POST })
export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
})

export default ForumReducer
