import { connect } from 'react-redux'
import ForumTopics from './ForumTopics'
import './ForumTopics.css'

const mapStateToProps = (state) => {
  return {
    forumToopicsData: state.forumPage.forumToopicsData,
  }
}

const ForumTopicsContainer = connect(mapStateToProps)(ForumTopics)

export default ForumTopicsContainer
