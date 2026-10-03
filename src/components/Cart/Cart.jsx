import { Link } from 'react-router-dom'

import CartRow from './CartRow'
import { getRows, getTotal } from '../../helpers/cart'
import './Cart.css'

function Cart(props) {
  if (props.loading) {
    return (
      <div className="cart-page page-anim">
        <div className="wrap">
          <p className="ca-empty-text ca-loading">{props.t.loading}</p>
        </div>
      </div>
    )
  }

  if (!props.user) {
    return (
      <div className="cart-page page-anim">
        <div className="wrap">
          <p className="crumbs">
            <Link to="/">{props.t.home}</Link> / {props.t.cart}
          </p>
          <div className="ca-empty">
            <p className="ca-empty-text">{props.t.pleaseLogIn}</p>
            <Link className="btn-red ca-login" to="/login">
              {props.t.logIn}
            </Link>
          </div>
        </div>
      </div>
    )
  }

  let rows = getRows(props.cart)
  let sum = getTotal(rows)

  if (rows.length === 0) {
    return (
      <div className="cart-page page-anim">
        <div className="wrap">
          <p className="crumbs">
            <Link to="/">{props.t.home}</Link> / {props.t.cart}
          </p>
          <div className="ca-empty">
            <p className="ca-empty-text">{props.t.yourCartIsEmpty}</p>
            <Link className="btn-red ca-login" to="/">
              {props.t.returnToShop}
            </Link>
          </div>
        </div>
      </div>
    )
  }

  let list = []
  let i = 0
  while (i < rows.length) {
    let row = rows[i]
    list.push(
      <CartRow
        key={row.product.id}
        row={row}
        changeQty={props.changeQty}
        removeFromCart={props.removeFromCart}
        t={props.t}
      />
    )
    i = i + 1
  }

  return (
    <div className="cart-page page-anim">
      <div className="wrap">
        <p className="crumbs">
          <Link to="/">{props.t.home}</Link> / {props.t.cart}
        </p>

        <div className="ca-head">
          <span>{props.t.product}</span>
          <span>{props.t.price}</span>
          <span>{props.t.quantity}</span>
          <span>{props.t.subtotal}</span>
        </div>

        {list}

        <div className="ca-actions">
          <Link className="ca-outline" to="/">
            {props.t.returnToShop}
          </Link>
          <button type="button" className="ca-outline">
            {props.t.updateCart}
          </button>
        </div>

        <div className="ca-bottom">
          <div className="ca-coupon">
            <input className="ca-input" type="text" placeholder={props.t.couponCode} />
            <button type="button" className="btn-red ca-apply">
              {props.t.applyCoupon}
            </button>
          </div>

          <div className="ca-total">
            <h3 className="ca-total-title">{props.t.cartTotal}</h3>

            <div className="ca-total-row">
              <span>{props.t.subtotal}</span>
              <span>${sum}</span>
            </div>
            <div className="ca-total-row">
              <span>{props.t.shipping}</span>
              <span>{props.t.free}</span>
            </div>
            <div className="ca-total-row">
              <span>{props.t.total}</span>
              <span>${sum}</span>
            </div>

            <Link className="btn-red ca-checkout" to="/checkout">
              {props.t.checkout}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
