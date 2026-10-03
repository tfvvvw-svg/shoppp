import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth'

import shop from '../../assets/shop.png'
import { auth } from '../../firebase'
import getError from '../Login/getError'
import '../Login/Login.css'

function checkEmpty(name, email, pass) {
  if (name === '') {
    return true
  }
  if (email === '') {
    return true
  }
  if (pass === '') {
    return true
  }
  return false
}

function checkShort(pass) {
  if (pass.length < 6) {
    return true
  }
  return false
}

function SignUp(props) {
  let t = props.t
  let navigate = useNavigate()

  let [name, setName] = useState('')
  let [email, setEmail] = useState('')
  let [pass, setPass] = useState('')

  let [error, setError] = useState('')
  let [code, setCode] = useState('')

  let [busy, setBusy] = useState(false)

  function changeName(event) {
    setName(event.target.value)
  }

  function changeEmail(event) {
    setEmail(event.target.value)
  }

  function changePass(event) {
    setPass(event.target.value)
  }

  function clear() {
    setError('')
    setCode('')
  }

  function goHome() {
    setBusy(false)
    navigate('/')
  }

  function showError(fail) {
    clear()
    setCode(fail.code)
    setError(getError(fail.code, t))
  }

  function showText(text) {
    clear()
    setError(text)
  }

  function send() {
    if (checkEmpty(name, email, pass)) {
      showText(t.fillFields)
      return
    }

    if (checkShort(pass)) {
      showText(t.weakPassword)
      return
    }

    clear()
    setBusy(true)

    createUserWithEmailAndPassword(auth, email.trim(), pass).then(made).catch(showError)

    function made(data) {
      updateProfile(data.user, { displayName: name.trim() }).then(goHome).catch(showError)
    }
  }

  function google() {
    clear()
    setBusy(true)

    let provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider).then(goHome).catch(showError)
  }

  let errBox = null
  if (error !== '') {
    errBox = <p className="auth-err">{error}</p>
  }

  let codeBox = null
  if (code !== '') {
    codeBox = <p className="auth-code">{code}</p>
  }

  return (
    <div className="signup-page page-anim">
      <img className="auth-photo" src={shop} alt="Exclusive" />

      <div className="auth-box form-anim">
        <h2 className="auth-title">{t.createAccount}</h2>
        <p className="auth-sub">{t.enterDetails}</p>

        <input className="auth-input" type="text" placeholder={t.name} value={name} onChange={changeName} />
        <input
          className="auth-input"
          type="email"
          placeholder={t.emailOrPhone}
          value={email}
          onChange={changeEmail}
        />
        <input
          className="auth-input"
          type="password"
          placeholder={t.password}
          value={pass}
          onChange={changePass}
        />

        {errBox}
        {codeBox}

        <button type="button" className="btn-red auth-wide" onClick={send} disabled={busy}>
          {t.createAccount}
        </button>
        <button type="button" className="auth-google" onClick={google} disabled={busy}>
          {t.signInGoogle}
        </button>

        <p className="auth-foot">
          {t.alreadyHaveAccount}{' '}
          <Link className="auth-link" to="/login">
            {t.logIn}
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp
