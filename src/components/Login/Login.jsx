import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'

import shop from '../../assets/shop.png'
import { auth } from '../../firebase'
import getError from './getError'
import './Login.css'

function Login(props) {
  let t = props.t

  let [email, setEmail] = useState('')
  let [pass, setPass] = useState('')

  let [err, setErr] = useState('')
  let [errCode, setErrCode] = useState('')
  let [ok, setOk] = useState('')

  let [busy, setBusy] = useState(false)
  let navigate = useNavigate()

  function changeEmail(event) {
    setEmail(event.target.value)
  }

  function changePass(event) {
    setPass(event.target.value)
  }

  function clearMessages() {
    setErr('')
    setErrCode('')
    setOk('')
  }

  async function logIn() {
    if (!email || !pass) {
      setErrCode('')
      setErr(t.fillFields)
      return
    }

    setBusy(true)
    clearMessages()

    try {
      await signInWithEmailAndPassword(auth, email.trim(), pass)
      navigate('/')
    } catch (error) {
      setErrCode(error.code)
      setErr(getError(error.code, t))
    }

    setBusy(false)
  }

  async function reset() {
    if (!email) {
      setErrCode('')
      setErr(t.fillFields)
      return
    }

    setBusy(true)
    clearMessages()

    try {
      await sendPasswordResetEmail(auth, email.trim())
      setOk(t.resetSent)
    } catch (error) {
      setErrCode(error.code)
      setErr(getError(error.code, t))
    }

    setBusy(false)
  }

  async function signGoogle() {
    setBusy(true)
    clearMessages()

    try {
      let provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
      navigate('/')
    } catch (error) {
      setErrCode(error.code)
      setErr(getError(error.code, t))
    }

    setBusy(false)
  }

  let errBox = null
  if (err) {
    errBox = <p className="auth-err">{err}</p>
  }

  let codeBox = null
  if (errCode) {
    codeBox = <p className="auth-code">{errCode}</p>
  }

  let okBox = null
  if (ok) {
    okBox = <p className="auth-ok">{ok}</p>
  }

  return (
    <div className="login-page page-anim">
      <img className="auth-photo" src={shop} alt="Exclusive" />

      <div className="auth-box form-anim">
        <h2 className="auth-title">{t.logInTo}</h2>
        <p className="auth-sub">{t.enterDetails}</p>

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
        {okBox}

        <div className="auth-row">
          <button type="button" className="btn-red auth-btn" onClick={logIn} disabled={busy}>
            {t.logIn}
          </button>
          <button type="button" className="auth-link auth-reset" onClick={reset} disabled={busy}>
            {t.forgetPassword}
          </button>
        </div>

        <button type="button" className="auth-google auth-wide" onClick={signGoogle} disabled={busy}>
          {t.continueWithGoogle}
        </button>

        <p className="auth-foot">
          {t.alreadyHaveAccount} <Link className="auth-link" to="/signup">{t.signUp}</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
