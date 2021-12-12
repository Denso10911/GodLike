import './User.css'

const User = (props) => {
  return (
    <div className="aboutUser">
      <div className="aboutUser__foto">
        <img src={props.userInfo.avatar} alt="Avatar" />
      </div>
      <div className="aboutUser__infrmation">
        <div className="aboutUser__fullName">
          {props.userInfo.firstName} {props.userInfo.secondName}
        </div>
        <div className="aboutUser__country">{props.userInfo.country}</div>
        <div className="aboutUser__sity">{props.userInfo.sity}</div>
        <div className="aboutUser__credo">{props.userInfo.credo}</div>
      </div>
    </div>
  )
}

export default User
