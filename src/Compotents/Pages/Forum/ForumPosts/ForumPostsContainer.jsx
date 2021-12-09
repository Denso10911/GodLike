import {
  sentNewPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../../Redux/ForumReducer'
import ForumPosts from './ForumPosts'
import { connect } from 'react-redux'

// const ForumPostsContainer = (props) => {
//   let state = props.store.getState()

//   let onPostSentClick = () => {
//     props.store.dispatch(newPostAction())
//   }

//   let onPostTextChange = (newPostPoint) => {
//     props.store.dispatch(onPostChangeAction(newPostPoint))
//   }

//   return (
//     <ForumPosts
//       onPostChangeAction={onPostTextChange}
//       newPostAction={onPostSentClick}
//       forum={state.forum}
//     />
//   )
// }

const mapStateToProps = (state) => {
  return {
    forum: state.forum,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostTextAction: (newPostPoint) => {
      dispatch(updateNewPostTextActionCreator(newPostPoint))
    },
    sentNewPostAction: () => {
      dispatch(sentNewPostActionCreator())
    },
  }
}

const ForumPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ForumPosts)

export default ForumPostsContainer
