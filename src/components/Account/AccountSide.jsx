import { Link } from 'react-router-dom'

function AccountSide(props) {
  return (
    <aside className="ac-side">
      <p className="ac-side-title">{props.t.manageMyAccount}</p>
      <p className="ac-side-item ac-side-on">{props.t.myProfile}</p>
      <p className="ac-side-item">{props.t.addressBook}</p>
      <p className="ac-side-item">{props.t.myPaymentOptions}</p>

      <p className="ac-side-title">{props.t.myOrders}</p>
      <p className="ac-side-item">{props.t.myReturns}</p>
      <p className="ac-side-item">{props.t.myCancellations}</p>

      <p className="ac-side-title">{props.t.myWishList}</p>
      <Link className="ac-side-item" to="/wishlist">
        {props.t.myWishList}
      </Link>
    </aside>
  )
}

export default AccountSide