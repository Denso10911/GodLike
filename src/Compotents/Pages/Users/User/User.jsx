import './User.css'

const User = (props) => {
  return (
    <div className="aboutUser">
      <div className="aboutUser__foto">{props.userInfo.avatar}</div>
      <div className="aboutUser__firstName">{props.userInfo.firstName}</div>
      <div className="aboutUser__secondName">{props.userInfo.secondName}</div>
      <div className="aboutUser__country">{props.userInfo.country}</div>
      <div className="aboutUser__sity">{props.userInfo.sity}</div>
    </div>
  )
}

export default User
