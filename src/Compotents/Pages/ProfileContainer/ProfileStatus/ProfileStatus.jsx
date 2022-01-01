import React from 'react'

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  }

  activateEditMod = () => {
    console.log(this)
    this.setState({
      editMode: true,
    })
  }
  deactivateEditMod = () => {
    this.setState({
      editMode: false,
    })
    this.props.updateUserStatusThunk(this.state.status)
  }

  onStatusTextChange = (e) =>
    this.setState({
      status: e.currentTarget.value,
    })

  render() {
    return (
      <div className='profile__status'>
        {!this.state.editMode && (
          <div>
            <span onClick={this.activateEditMod}>{!this.props.status ? 'Writte some text' : this.props.status} </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input onChange={this.onStatusTextChange} autoFocus={true} value={!this.state.status ? 'Writte some text' : this.state.status} onBlur={this.deactivateEditMod} />
          </div>
        )}
      </div>
    )
  }
}

export default ProfileStatus
