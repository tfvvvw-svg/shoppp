import { FiChevronDown, FiChevronUp, FiX } from 'react-icons/fi'

function CartRow(props) {
  let product = props.row.product
  let qty = props.row.qty

  let qtyText = String(qty)
  if (qty < 10) {
    qtyText = '0' + qty
  }

  function increase() {
    props.changeQty(product.id, qty + 1)
  }

  function decrease() {
    props.changeQty(product.id, qty - 1)
  }

  function remove() {
    props.removeFromCart(product.id)
  }

  return (
    <div className="ca-row">
      <div className="ca-product">
        <span className="ca-thumb">
          <img src={product.image} alt={product.name} />
          <button type="button" className="ca-del" aria-label={props.t.removeProduct} onClick={remove}>
            <FiX />
          </button>
        </span>
        <span>{product.name}</span>
      </div>

      <span>${product.price}</span>

      <span className="ca-qty">
        <span>{qtyText}</span>
        <span className="ca-arrows">
          <button type="button" aria-label={props.t.increaseQty} onClick={increase}>
            <FiChevronUp />
          </button>
          <button type="button" aria-label={props.t.decreaseQty} onClick={decrease}>
            <FiChevronDown />
          </button>
        </span>
      </span>

      <span>${product.price * qty}</span>
    </div>
  )
}

export default CartRow
