import { NavLink } from 'react-router-dom'
import './List.css'

const List = (props) => {
  return (
    <div className="list__item">
      <NavLink to={'/messages/' + props.id}>{props.name}</NavLink>
    </div>
  )
}

export default List
