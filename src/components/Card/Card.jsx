import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiEye, FiHeart, FiTrash2 } from 'react-icons/fi'
import { FaHeart, FaRegStar, FaStar, FaStarHalfStroke } from 'react-icons/fa6'

function CardStars(props) {
  let stars = []

  let n = 1
  while (n <= 5) {
    if (props.rate >= n) {
      stars.push(<FaStar key={n} className="star" />)
    } else if (props.rate + 0.5 >= n) {
      stars.push(<FaStarHalfStroke key={n} className="star" />)
    } else {
      stars.push(<FaRegStar key={n} className="star star-empty" />)
    }
    n = n + 1
  }

  return <span className="stars">{stars}</span>
}

function Card(props) {
  let [pressed, setPressed] = useState(false)

  let product = props.product

  let discountNode = null
  if (product.discount > 0) {
    discountNode = <span className="card-discount">-{product.discount}%</span>
  }

  let newNode = null
  if (props.showNew) {
    if (product.isNew) {
      newNode = <span className="card-new">{props.t.new}</span>
    }
  }

  function clickWish() {
    props.onWish(product.id)
    if (props.animated) {
      setPressed(true)
      setTimeout(function () {
        setPressed(false)
      }, 300)
    }
  }

  function clickCart() {
    props.onAdd(product.id)
  }

  let trashNode = null
  if (props.showTrash) {
    trashNode = (
      <button type="button" className="card-trash" aria-label={props.t.removeProduct} onClick={clickWish}>
        <FiTrash2 />
      </button>
    )
  }

  let heartClass = 'card-heart'
  if (pressed) {
    heartClass = 'card-heart card-tap'
  }

  let heartIcon = <FiHeart />
  if (props.wished) {
    heartIcon = <FaHeart className="card-wished" />
  }

  let eyeNode = null
  if (props.showEye) {
    eyeNode = (
      <Link className="card-eye" to={`/product/${product.id}`} aria-label={props.t.quickView}>
        <FiEye />
      </Link>
    )
  }

  let heartNode = null
  if (props.showHeart) {
    heartNode = (
      <button type="button" className={heartClass} onClick={clickWish} aria-label={props.t.addToWish}>
        {heartIcon}
      </button>
    )
  }

  let iconsNode = null
  if (props.showHeart) {
    iconsNode = (
      <div className="card-actions">
        {heartNode}
        {eyeNode}
      </div>
    )
  } else {
    if (props.showEye) {
      iconsNode = (
        <div className="card-actions">
          {eyeNode}
        </div>
      )
    }
  }

  let oldNode = null
  if (product.oldPrice > 0) {
    oldNode = <span className="card-was">${product.oldPrice}</span>
  }

  let priceNode = (
    <p className="card-price">
      <span className="card-now">${product.price}</span>
      {oldNode}
    </p>
  )

  let metaNode = null
  if (props.showMeta) {
    metaNode = (
      <div className="card-meta">
        <CardStars rate={product.rating} />
        <span className="card-reviews">({product.reviews})</span>
      </div>
    )
  }

  let bottomNode = null
  if (props.inline) {
    bottomNode = (
      <div className="card-row">
        {priceNode}
        {metaNode}
      </div>
    )
  } else {
    bottomNode = (
      <>
        {priceNode}
        {metaNode}
      </>
    )
  }

  let colorsNode = null
  if (props.showColors) {
    if (product.colors) {
      let dots = []
      let i = 0
      while (i < product.colors.length) {
        dots.push(<span key={product.colors[i]} className="card-color" style={{ backgroundColor: product.colors[i] }} />)
        i = i + 1
      }

      colorsNode = (
        <div className="card-colors">
          {dots}
        </div>
      )
    }
  }

  let cartClass = 'card-cart'
  if (props.showCartOpen) {
    cartClass = 'card-cart card-cart-open'
  }

  return (
    <article className="card">
      <div className="card-media">
        {discountNode}
        {newNode}
        {trashNode}
        {iconsNode}

        <img className="card-image" src={product.image} alt={product.name} />

        <button type="button" className={cartClass} onClick={clickCart}>
          {props.t.addToCart}
        </button>
      </div>

      <h3 className="card-name">{product.name}</h3>

      {bottomNode}

      {colorsNode}
    </article>
  )
}

export default Card
