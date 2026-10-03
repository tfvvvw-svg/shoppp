import { Link } from 'react-router-dom'

import Card from '../Card/Card'
import { findProduct } from '../../helpers/cart'
import { PRODUCTS } from '../../products'
import './Wishes.css'

function getJustList(wishes) {
  let list = []

  let i = 0
  while (i < PRODUCTS.length) {
    if (wishes.indexOf(PRODUCTS[i].id) === -1) {
      list.push(PRODUCTS[i])
    }
    if (list.length === 4) {
      break
    }
    i = i + 1
  }

  return list
}

function Wishes(props) {
  let list = []

  if (props.loading) {
    return (
      <div className="wish-page page-anim">
        <div className="wrap">
          <p className="wish-text wish-bottom">{props.t.loading}</p>
        </div>
      </div>
    )
  }

  let i = 0
  while (i < props.wishes.length) {
    let product = findProduct(props.wishes[i])
    if (product) {
      list.push(product)
    }
    i = i + 1
  }

  let just = getJustList(props.wishes)

  function moveAll() {
    let j = 0
    while (j < list.length) {
      props.addToCart(list[j].id)
      props.toggleWish(list[j].id)
      j = j + 1
    }
  }

  let cards = []
  i = 0
  while (i < list.length) {
    let item = list[i]
    cards.push(
      <Card
        key={item.id}
        product={item}
        onAdd={props.addToCart}
        onWish={props.toggleWish}
        showMeta={false}
        showTrash
        showCartOpen
        t={props.t}
      />
    )
    i = i + 1
  }

  let justCards = []
  i = 0
  while (i < just.length) {
    let item = just[i]
    justCards.push(
      <Card
        key={item.id}
        product={item}
        onAdd={props.addToCart}
        onWish={props.toggleWish}
        showNew
        showEye
        showCartOpen
        t={props.t}
      />
    )
    i = i + 1
  }

  let empty = null
  if (list.length === 0) {
    empty = <p className="wish-text wish-bottom">{props.t.yourWishlistIsEmpty}</p>
  } else {
    empty = <div className="grid">{cards}</div>
  }

  return (
    <div className="wish-page page-anim">
      <div className="wrap">
        <div className="wish-head">
          <h2 className="page-title wish-title">
            {props.t.wishlist} ({list.length})
          </h2>
          <button type="button" className="wish-button" onClick={moveAll}>
            {props.t.moveAllToBag}
          </button>
        </div>

        {empty}

        <div className="wish-section">
          <div className="wish-section-head">
            <p className="wish-tag">
              <span className="tag-bar" />
              {props.t.justForYou}
            </p>
            <Link className="wish-button" to="/">
              {props.t.seeAll}
            </Link>
          </div>

          <div className="grid">{justCards}</div>
        </div>
      </div>
    </div>
  )
}

export default Wishes
