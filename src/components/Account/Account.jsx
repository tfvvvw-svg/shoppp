import { useState } from 'react'
import { Link } from 'react-router-dom'

import { saveProfile } from '../../helpers/Profile'
import AccountSide from './AccountSide'
import './Account.css'

function Account(props) {
  let [firstName, setFirstName] = useState('')
  let [lastName, setLastName] = useState('')
  let [address, setAddress] = useState('')
  let [curPass, setCurPass] = useState('')
  let [newPass, setNewPass] = useState('')
  let [confirmPass, setConfirmPass] = useState('')

  let [ok, setOk] = useState('')
  let [err, setErr] = useState('')

  let [busy, setBusy] = useState(false)

  if (props.loading) {
    return (
      <div className="account-page page-anim">
        <div className="wrap">
          <p className="ac-logout-text">{props.t.loading}</p>
        </div>
      </div>
    )
  }

  if (!props.user) {
    return (
      <div className="account-page page-anim">
        <div className="wrap">
          <p className="crumbs">
            <Link to="/">{props.t.home}</Link> / {props.t.myAccount}
          </p>
          <p className="ac-logout-text">
            {props.t.pleaseLogIn}{' '}
            <Link className="ac-login-link" to="/login">
              {props.t.logIn}
            </Link>
          </p>
        </div>
      </div>
    )
  }

  let fullName = ''
  if (props.user.displayName) {
    fullName = props.user.displayName
  }

  let parts = fullName.split(' ')
  let firstValue = parts[0]

  let rest = []
  let i = 1
  while (i < parts.length) {
    rest.push(parts[i])
    i = i + 1
  }
  let lastValue = rest.join(' ')

  let userName = props.user.displayName
  if (!userName) {
    userName = props.user.email.split('@')[0]
  }

  async function save() {
    setOk('')
    setErr('')
    setBusy(true)

    let newName = (firstName + ' ' + lastName).trim()

    try {
      let message = await saveProfile(props.user, newName, curPass, newPass, confirmPass, props.t)

      if (message) {
        setErr(message)
      } else {
        setOk(props.t.profileSaved)
        setCurPass('')
        setNewPass('')
        setConfirmPass('')
      }
    } catch (error) {
      setErr(error.code)
    }

    setBusy(false)
  }

  function changeFirstName(event) {
    setFirstName(event.target.value)
  }

  function changeLastName(event) {
    setLastName(event.target.value)
  }

  function changeAddress(event) {
    setAddress(event.target.value)
  }

  function changeCurPass(event) {
    setCurPass(event.target.value)
  }

  function changeNewPass(event) {
    setNewPass(event.target.value)
  }

  function changeConfirmPass(event) {
    setConfirmPass(event.target.value)
  }

  function clearErr() {
    setErr('')
  }

  let errBox = null
  if (err) {
    errBox = <p className="ac-err">{err}</p>
  }

  let okBox = null
  if (ok) {
    okBox = <p className="ac-ok">{ok}</p>
  }

  return (
    <div className="account-page page-anim">
      <div className="wrap">
        <div className="ac-top">
          <p className="crumbs">
            <Link to="/">{props.t.home}</Link> / <span className="crumbs-now">{props.t.myAccount}</span>
          </p>
          <p className="ac-welcome">
            {props.t.welcome} <span className="ac-name">{userName}</span>
          </p>
        </div>

        <div className="ac-body">
          <AccountSide t={props.t} />

          <div className="ac-card form-anim">
            <h2 className="ac-title">{props.t.editYourProfile}</h2>

            <div className="ac-two">
              <label className="ac-label">
                {props.t.firstName}
                <input className="ac-input" type="text" defaultValue={firstValue} onChange={changeFirstName} />
              </label>
              <label className="ac-label">
                {props.t.lastName}
                <input className="ac-input" type="text" defaultValue={lastValue} onChange={changeLastName} />
              </label>
            </div>

            <div className="ac-two">
              <label className="ac-label">
                {props.t.emailField}
                <input className="ac-input" type="email" value={props.user.email} readOnly />
              </label>
              <label className="ac-label">
                {props.t.addressField}
                <input className="ac-input" type="text" value={address} onChange={changeAddress} />
              </label>
            </div>

            <p className="ac-label ac-pass-title">{props.t.passwordChanges}</p>
            <input className="ac-input ac-full" type="password" value={curPass} onChange={changeCurPass} placeholder={props.t.currentPassword} />
            <input className="ac-input ac-full" type="password" value={newPass} onChange={changeNewPass} placeholder={props.t.newPassword} />
            <input className="ac-input ac-full" type="password" value={confirmPass} onChange={changeConfirmPass} placeholder={props.t.confirmNewPassword} />

            {errBox}
            {okBox}

            <div className="ac-actions">
              <button type="button" className="ac-cancel" onClick={clearErr}>
                {props.t.cancel}
              </button>
              <button type="button" className="btn-red ac-save" onClick={save} disabled={busy}>
                {props.t.saveChanges}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
