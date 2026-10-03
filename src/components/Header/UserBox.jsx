import { Link } from 'react-router-dom'
import { FiUser } from 'react-icons/fi'

function UserBox(props) {
  function toggleMenu() {
    props.setMenuOpen(!props.menuOpen)
  }

  let menu = null

  if (props.menuOpen) {
    menu = (
      <div className="user-menu">
        <Link className="user-item" to="/account" onClick={props.closeMenu}>
          <FiUser />
          {props.t.manageAccount}
        </Link>
        <Link className="user-item" to="/account" onClick={props.closeMenu}>
          <FiUser />
          {props.t.myOrder}
        </Link>
        <Link className="user-item" to="/account" onClick={props.closeMenu}>
          <FiUser />
          {props.t.myCancellations}
        </Link>
        <Link className="user-item" to="/account" onClick={props.closeMenu}>
          <FiUser />
          {props.t.myReviews}
        </Link>

        <button type="button" className="user-item" onClick={props.logOut}>
          <FiUser />
          {props.t.logout}
        </button>
      </div>
    )
  }

  return (
    <div className="user-box">
      <button type="button" className="user-button" onClick={toggleMenu} aria-label={props.t.myAccount}>
        <FiUser />
      </button>
      {menu}
    </div>
  )
}

export default UserBox
