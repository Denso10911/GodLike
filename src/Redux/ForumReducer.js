const NEW_POST = 'NEW-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const ForumReducer = (state, action) => {
  switch (action.type) {
    case NEW_POST:
      let post = {
        id: state.posts.length + 1,
        text: state.newPostText,
        likes: 0,
      }
      state.posts.push(post)
      state.newPostText = ''
      return state
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText
      return state
    default:
      return state
  }
}

export const newPostAction = () => ({ type: NEW_POST })
export const onPostChangeAction = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
})

export default ForumReducer
