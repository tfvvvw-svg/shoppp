import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'

import { auth } from '../../firebase'
import { getCount, findProducts } from '../../helpers/cart'
import SearchBox from './SearchBox'
import TopBar from './TopBar'
import UserBox from './UserBox'
import { WishIcon, CartIcon, LoginIcon } from './HeaderIcons'
import './Header.css'

function navClass(info) {
  if (info.isActive) {
    return 'nav-link nav-on'
  }
  return 'nav-link'
}

function Header(props) {
  let [word, setWord] = useState('')
  let [menuOpen, setMenuOpen] = useState(false)
  let navigate = useNavigate()

  let count = getCount(props.cart)
  let found = findProducts(word)

  function openProduct(id) {
    setWord('')
    navigate('/product/' + id)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  function logOut() {
    setMenuOpen(false)
    signOut(auth)
  }

  let navPart = null
  let userPart = null

  if (props.user) {
    navPart = (
      <button type="button" className="nav-button" onClick={logOut}>
        {props.t.logOut}
      </button>
    )

    userPart = (
      <UserBox
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        closeMenu={closeMenu}
        logOut={logOut}
        t={props.t}
      />
    )
  } else {
    navPart = (
      <NavLink className={navClass} to="/signup">
        {props.t.signUp}
      </NavLink>
    )

    userPart = <LoginIcon />
  }

  return (
    <>
      <TopBar lang={props.lang} setLang={props.setLang} t={props.t} />

      <header className="header"> 
        <div className="wrap header-row">
          <div className="header-start">
            <Link className="logo" to="/">
              Exclusive
            </Link>

            <nav className="nav">
              <NavLink className={navClass} to="/">
                {props.t.home}
              </NavLink>
              <NavLink className={navClass} to="/contact">
                {props.t.contact}
              </NavLink>
              <NavLink className={navClass} to="/about">
                {props.t.about}
              </NavLink>
              {navPart}
            </nav>
          </div>

          <div className="header-end">
            <SearchBox word={word} setWord={setWord} found={found} openProduct={openProduct} t={props.t} />

            <WishIcon wishes={props.wishes} />

            <CartIcon count={count} />

            {userPart}
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
