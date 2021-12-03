import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './GetGodLike.module.css'

const GetGodLike = (props) => {
  return (
    <div className={style.title}>
      <div className={style.background}>
        <div className={style.get}>
          <div className={style.logo}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRKVQ_W4ssbfMQXrA61ySI8cOLQhXQcE7IAQ&usqp=CAU"
              alt=""
            />
            <h2 className={style.get__title}>Get GodLike</h2>
          </div>

          <div className={style.icons}>
            <div className={style.apple}>
              <FontAwesomeIcon icon={['fab', 'apple']} />
            </div>
            <div className={style.xbox}>
              <FontAwesomeIcon icon={['fab', 'xbox']} />
            </div>
            <div className={style.plariumPlay}>
              <img
                src="https://cdn01.x-plarium.com/browser/content/portal/common/buttons/plarium_play/en.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetGodLike
