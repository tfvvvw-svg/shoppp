import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { getRows, getTotal } from '../../helpers/cart'
import CheckoutForm from './CheckoutForm'
import CheckoutSide from './CheckoutSide'
import './Checkout.css'

function Checkout(props) {
  let [firstName, setFirstName] = useState('')
  let [company, setCompany] = useState('')
  let [street, setStreet] = useState('')
  let [apartment, setApartment] = useState('')
  let [city, setCity] = useState('')
  let [phone, setPhone] = useState('')
  let [email, setEmail] = useState('')
  let [saveInfo, setSaveInfo] = useState(true)

  let [pay, setPay] = useState('bank')
  let [coupon, setCoupon] = useState('')

  let [err, setErr] = useState('')
  let [ok, setOk] = useState('')

  let navigate = useNavigate()

  let rows = getRows(props.cart)
  let sum = getTotal(rows)

  function goHome() {
    navigate('/')
  }

  function placeOrder() {
    if (!firstName || !street || !city || !phone || !email) {
      setErr(props.t.fillRequired)
      return
    }

    setErr('')
    props.clearCart()
    setOk(props.t.orderSuccess)
    setTimeout(goHome, 2000)
  }

  return (
    <div className="checkout-page page-anim">
      <div className="wrap">
        <p className="crumbs">
          <Link to="/account">{props.t.account}</Link> / <Link to="/account">{props.t.myAccount}</Link> /{' '}
          <Link to="/">{props.t.product}</Link> / <Link to="/cart">{props.t.viewCart}</Link>{' '}
          <span className="crumbs-now">{props.t.checkOut}</span>
        </p>

        <h1 className="ck-title">{props.t.billingDetails}</h1>

        <div className="ck-body">
          <CheckoutForm
            firstName={firstName}
            setFirstName={setFirstName}
            company={company}
            setCompany={setCompany}
            street={street}
            setStreet={setStreet}
            apartment={apartment}
            setApartment={setApartment}
            city={city}
            setCity={setCity}
            phone={phone}
            setPhone={setPhone}
            email={email}
            setEmail={setEmail}
            saveInfo={saveInfo}
            setSaveInfo={setSaveInfo}
            t={props.t}
          />

          <CheckoutSide
            rows={rows}
            sum={sum}
            pay={pay}
            setPay={setPay}
            coupon={coupon}
            setCoupon={setCoupon}
            err={err}
            ok={ok}
            placeOrder={placeOrder}
            t={props.t}
          />
        </div>
      </div>
    </div>
  )
}

export default Checkout
