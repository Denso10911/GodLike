import { connect } from 'react-redux'
import { sentNewMessageActionCreator, updateNewTextMessageActionCreator } from '../../../Redux/MessagesReducer'
import Messages from './Messages'

const mapStateToProps = (state) => {
  return {
    messages: state.messagesPage,
    isAuth: state.login.isAuth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewTextMessageAction: (text) => {
      let action = updateNewTextMessageActionCreator(text)
      dispatch(action)
    },
    sentNewMessageAction: () => {
      let action = sentNewMessageActionCreator()
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages)
