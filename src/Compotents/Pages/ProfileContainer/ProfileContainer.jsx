import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { profileAPI } from '../../../api/api'
import { setUserInformation } from '../../../Redux/ProfileReducer'
import Profile from './Profile'

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId // Берем параметр ID с помошью компонента высшего порядка
    profileAPI.getProfile(userId).then((response) => {
      //Функция которая делает запрос на сервер
      this.props.setUserInformation(response.data) // Колбек функция которая диспатчит информацию о конкретном пользователе
    })
  }

  render() {
    return <Profile profile={this.props.profile} />
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
}

let WithRouterProfileContainer = withRouter(ProfileContainer) //компонент более высокого порядка, который будет передавать ближайшие route match, current locationи historyprops обернутому компоненту при каждом рендеринге

export default connect(mapStateToProps, {
  setUserInformation,
})(WithRouterProfileContainer)
