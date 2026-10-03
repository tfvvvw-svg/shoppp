function CheckoutSide(props) {
  let items = null

  if (props.rows.length === 0) {
    items = <p className="ck-empty">{props.t.yourCartIsEmpty}</p>
  } else {
    items = []

    let i = 0
    while (i < props.rows.length) {
      let row = props.rows[i]
      items.push(
        <div className="ck-item" key={row.product.id}>
          <img src={row.product.image} alt={row.product.name} />
          <span className="ck-item-name">{row.product.name}</span>
          <span className="ck-item-price">${row.product.price * row.qty}</span>
        </div>
      )
      i = i + 1
    }
  }

  function chooseBank() {
    props.setPay('bank')
  }

  function chooseCash() {
    props.setPay('cash')
  }

  function changeCoupon(event) {
    props.setCoupon(event.target.value)
  }

  let errBox = null
  if (props.err) {
    errBox = <p className="ck-err">{props.err}</p>
  }

  let okBox = null
  if (props.ok) {
    okBox = <p className="ck-ok">{props.ok}</p>
  }

  return (
    <div className="ck-side form-anim">
      {items}

      <div className="ck-row">
        <span>{props.t.subtotal}</span>
        <span>${props.sum}</span>
      </div>
      <div className="ck-row">
        <span>{props.t.shipping}</span>
        <span>{props.t.free}</span>
      </div>
      <div className="ck-row">
        <span>{props.t.total}</span>
        <span>${props.sum}</span>
      </div>

      <label className="ck-pay">
        <input type="radio" checked={props.pay === 'bank'} onChange={chooseBank} />
        <span>{props.t.bank}</span>
        <span className="ck-cards">
          <span className="ck-card" />
          <span className="ck-card" />
          <span className="ck-card" />
          <span className="ck-card" />
        </span>
      </label>

      <label className="ck-pay">
        <input type="radio" checked={props.pay === 'cash'} onChange={chooseCash} />
        <span>{props.t.cashOnDelivery}</span>
      </label>

      <div className="ck-coupon">
        <input
          className="ck-coupon-input"
          type="text"
          value={props.coupon}
          onChange={changeCoupon}
          placeholder={props.t.couponCode}
        />
        <button type="button" className="btn-red ck-apply">
          {props.t.applyCoupon}
        </button>
      </div>

      <button type="button" className="btn-red ck-place" onClick={props.placeOrder}>
        {props.t.placeOrder}
      </button>

      {errBox}
      {okBox}
    </div>
  )
}

export default CheckoutSide
