import { Link } from 'react-router-dom'

import './Footer.css'

function FooterOne(props) {
  return (
    <div className="footer-one">
      <p className="footer-logo">Exclusive</p>
      <p className="footer-sub">{props.t.subscribe}</p>
      <p className="footer-text footer-text-one">{props.t.getTenOff}</p>

      <div className="footer-mail">
        <input className="footer-mail-input" type="text" placeholder={props.t.enterEmail} />
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fafafa" strokeWidth="1.6">
          <path d="M3 12h17M14 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

function FooterTwo(props) {
  return (
    <div className="footer-two">
      <p className="footer-title">{props.t.support}</p>
      <p className="footer-text footer-text-two">{props.t.address}</p>
      <p className="footer-text footer-text-two">exclusive@gmail.com</p>
      <p className="footer-text footer-text-two">+88015-88888-9999</p>
      <Link className="footer-item" to="/about">
        {props.t.aboutUs}
      </Link>
      <Link className="footer-item" to="/contact">
        {props.t.helpCenter}
      </Link>
    </div>
  )
}

function FooterThree(props) {
  return (
    <div className="footer-three">
      <p className="footer-title">{props.t.account}</p>
      <Link className="footer-item" to="/account">
        {props.t.myAccount}
      </Link>
      <Link className="footer-item" to="/login">
        {props.t.loginRegister}
      </Link>
      <Link className="footer-item" to="/cart">
        {props.t.cart}
      </Link>
      <Link className="footer-item" to="/wishlist">
        {props.t.wishlist}
      </Link>
      <Link className="footer-item" to="/">
        {props.t.shop}
      </Link>
    </div>
  )
}

function FooterFour(props) {
  return (
    <div className="footer-four">
      <p className="footer-title">{props.t.quickLink}</p>
      <Link className="footer-item" to="/">
        {props.t.privacyPolicy}
      </Link>
      <Link className="footer-item" to="/">
        {props.t.termsOfUse}
      </Link>
      <Link className="footer-item" to="/contact">
        {props.t.faq}
      </Link>
      <Link className="footer-item" to="/contact">
        {props.t.contact}
      </Link>
    </div>
  )
}

function FooterQr() {
  return (
    <div className="footer-qr">
      <svg width="72" height="72" viewBox="0 0 72 72" fill="#000">
        <rect x="0" y="0" width="24" height="24" />
        <rect x="48" y="0" width="24" height="24" />
        <rect x="0" y="48" width="24" height="24" />
        <rect x="7" y="7" width="10" height="10" fill="#fff" />
        <rect x="55" y="7" width="10" height="10" fill="#fff" />
        <rect x="7" y="55" width="10" height="10" fill="#fff" />
        <rect x="34" y="34" width="12" height="12" />
        <rect x="34" y="0" width="8" height="8" />
        <rect x="0" y="34" width="8" height="8" />
      </svg>
    </div>
  )
}

function FooterFive(props) {
  return (
    <div className="footer-five">
      <p className="footer-title">{props.t.downloadApp}</p>
      <p className="footer-app-text">{props.t.saveThree}</p>

      <div className="footer-download">
        <FooterQr />

        <div className="footer-stores">
          <div className="footer-store">Google Play</div>
          <div className="footer-store">App Store</div>
        </div>
      </div>

      <div className="footer-social">
        <span className="footer-social-icon">f</span>
        <span className="footer-social-icon">X</span>
        <span className="footer-social-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fafafa" strokeWidth="1.6">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4.4" />
            <circle cx="17" cy="7" r="1.1" fill="#fafafa" />
          </svg>
        </span>
        <span className="footer-social-icon">in</span>
      </div>
    </div>
  )
}

function Footer(props) {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-cols">
          <FooterOne t={props.t} />
          <FooterTwo t={props.t} />
          <FooterThree t={props.t} />
          <FooterFour t={props.t} />
          <FooterFive t={props.t} />
        </div>
      </div>

      <p className="footer-bottom">{props.t.copyright}</p>
    </footer>
  )
}

export default Footer 