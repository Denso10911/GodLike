import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirecrt } from '../../../hoc/AuthHoc'
import { sentNewMessageActionCreator } from '../../../Redux/MessagesReducer'
import Messages from './Messages'

const mapStateToProps = (state) => {
  return {
    messages: state.messagesPage,
    isAuth: state.login.isAuth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sentNewMessageAction: (message) => {
      let action = sentNewMessageActionCreator(message)
      dispatch(action)
    },
  }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirecrt)(Messages)
