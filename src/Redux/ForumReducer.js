const NEW_POST = 'NEW-POST'

let initialState = {
  posts: [
    { id: 1, text: 'What are you thinking for', likes: 10 },
    { id: 2, text: 'About this game', likes: 15 },
  ],
  forumToopicsData: ['Clan', 'Guides and Tutorials', 'Tavern'],
}

const ForumReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_POST: {
      let post = {
        id: state.posts.length + 1,
        text: action.postText,
        likes: 0,
      }
      return {
        ...state,
        posts: [...state.posts, post],
      }
    }

    default:
      return state
  }
}

export const sentNewPost = (postText) => ({ type: NEW_POST, postText })

export default ForumReducer
