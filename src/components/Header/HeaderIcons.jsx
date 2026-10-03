import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa6'

function WishIcon(props) {
  let badge = null

  let icon = (
    <svg width="22" height="20" viewBox="0 0 24 22" fill="currentColor">
      <path d="M12 21S1 14.4 1 7.6C1 4.3 3.6 2 6.6 2c2.1 0 4 1.2 5.4 3.2C13.4 3.2 15.3 2 17.4 2 20.4 2 23 4.3 23 7.6c0 6.8-11 13.4-11 13.4z" />
    </svg>
  )

  if (props.wishes.length > 0) {
    badge = <span className="badge">{props.wishes.length}</span>
    icon = <FaHeart className="icon-wished" />
  }

  return (
    <Link className="icon-link" to="/wishlist" aria-label="wishlist">
      {icon}
      {badge}
    </Link>
  )
}

function CartIcon(props) {
  let badge = null
  if (props.count > 0) {
    badge = <span className="badge">{props.count}</span>
  }

  return (
    <Link className="icon-link" to="/cart">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      >
        <path d="M3 4h2.4l2.3 10.5h10.6L21 7.2H6.2" strokeLinecap="round" />
        <circle cx="9.8" cy="19.2" r="1.7" fill="currentColor" stroke="none" />
        <circle cx="17.4" cy="19.2" r="1.7" fill="currentColor" stroke="none" />
      </svg>
      {badge}
    </Link>
  )
}

function LoginIcon() {
  return (
    <Link className="icon-link" to="/login">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="7.5" r="3.8" />
        <path d="M4.5 21c0-4.1 3.4-6.6 7.5-6.6s7.5 2.5 7.5 6.6z" />
      </svg>
    </Link>
  )
}

export { WishIcon, CartIcon, LoginIcon }
