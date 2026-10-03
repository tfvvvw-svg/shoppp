import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FiHeart, FiRefreshCcw, FiTruck } from 'react-icons/fi'
import { FaHeart } from 'react-icons/fa6'

import { findProduct } from '../../helpers/cart'
import NotFound from '../NotFound/NotFound'
import RelatedItems from './RelatedItems'
import Stars from './Stars'
import './Product.css'

let SIZES = ['XS', 'S', 'M', 'L', 'XL']

function ProductGallery(props) {
  let thumbs = []

  let n = 1
  while (n <= 4) {
    thumbs.push(
      <button type="button" className="product-thumb" key={n} aria-label={props.t.image + ' ' + n}>
        <img className="product-thumb-img" src={props.product.image} alt={props.product.name} />
      </button>
    )
    n = n + 1
  }

  return (
    <div className="product-gallery">
      <div className="product-thumbs">{thumbs}</div>

      <div className="product-main">
        <img className="product-main-img" src={props.product.image} alt={props.product.name} />
      </div>
    </div>
  )
}

function ProductColors(props) {
  return (
    <div className="product-row">
      <span className="product-label">{props.t.colours}</span>
      <span className="product-dots">
        <span className="product-dot" />
        <span className="product-dot product-dot-red" />
      </span>
    </div>
  )
}

function ProductSizes(props) {
  let buttons = []

  let i = 0
  while (i < props.sizes.length) {
    let item = props.sizes[i]

    let className = 'product-size'
    if (item === props.size) {
      className = 'product-size product-size-active'
    }

    let value = item
    buttons.push(
      <button
        type="button"
        className={className}
        key={item}
        onClick={function () {
          props.setSize(value)
        }}
      >
        {item}
      </button>
    )

    i = i + 1
  }

  return (
    <div className="product-row">
      <span className="product-label">{props.t.size}</span>
      <span className="product-sizes">{buttons}</span>
    </div>
  )
}

function ProductBuy(props) {
  let className = 'product-wish'
  if (props.tap) {
    className = 'product-wish card-tap'
  }

  function less() {
    props.setQty(props.qty - 1)
  }

  function more() {
    props.setQty(props.qty + 1)
  }

  let heartIcon = <FiHeart />
  if (props.wished) {
    heartIcon = <FaHeart className="card-wished" />
  }

  return (
    <div className="product-buy">
      <div className="product-qty">
        <button type="button" className="product-minus" aria-label={props.t.decreaseQty} onClick={less}>
          -
        </button>
        <span className="product-count">{props.qty}</span>
        <button type="button" className="product-plus" aria-label={props.t.increaseQty} onClick={more}>
          +
        </button>
      </div>

      <button type="button" className="button product-buy-button" onClick={props.buyNow}>
        {props.t.buyNow}
      </button>

      <button type="button" className={className} onClick={props.clickWish} aria-label={props.t.addToWish}>
        {heartIcon}
      </button>
    </div>
  )
}

function ProductBox(props) {
  return (
    <div className="product-box">
      <div className="product-box-row">
        <span className="product-box-icon">
          <FiTruck />
        </span>
        <div>
          <p className="product-box-title">{props.t.freeDelivery}</p>
          <p className="product-box-text">{props.t.postalCode}</p>
        </div>
      </div>

      <div className="product-box-row product-box-row-two">
        <span className="product-box-icon">
          <FiRefreshCcw />
        </span>
        <div>
          <p className="product-box-title">{props.t.returnDelivery}</p>
          <p className="product-box-text">{props.t.returnText}</p>
        </div>
      </div>
    </div>
  )
}

function ProductInfo(props) {
  let product = props.product

  return (
    <div className="product-info">
      <h2 className="product-title">{product.name}</h2>

      <div className="product-rating">
        <Stars rate={product.rating} />
        <span className="card-reviews">
          ({product.reviews} {props.t.reviews})
        </span>
        <span className="product-sep">|</span>
        <span className="product-stock">{props.t.inStock}</span>
      </div>

      <p className="product-price">${product.price}.00</p>

      <p className="product-desc">{props.t.desc}</p>

      <hr className="product-line" />

      <ProductColors t={props.t} />

      <ProductSizes sizes={SIZES} size={props.size} setSize={props.setSize} t={props.t} />

      <ProductBuy
        qty={props.qty}
        setQty={props.setQty}
        tap={props.tap}
        wished={props.wished}
        clickWish={props.clickWish}
        buyNow={props.buyNow}
        t={props.t}
      />

      <ProductBox t={props.t} />
    </div>
  )
}

function Product(props) {
  let params = useParams()
  let id = params.id
  let navigate = useNavigate()

  let [qty, setQty] = useState(1)
  let [size, setSize] = useState('M')
  let [tap, setTap] = useState(false)

  let product = findProduct(Number(id))

  useEffect(function () {
    window.scrollTo(0, 0)
  }, [id])

  if (!product) {
    return <NotFound t={props.t} />
  }

  let wished = props.wishes.indexOf(product.id) !== -1

  function clickWish() {
    props.toggleWish(product.id)
    setTap(true)
    setTimeout(function () {
      setTap(false)
    }, 300)
  }

  function buyNow() {
    props.addToCart(product.id, qty)
    navigate('/cart')
  }

  return (
    <div className="product-page page-anim">
      <div className="wrap">
        <p className="crumbs">
          <Link to="/">{props.t.account}</Link> / <Link to="/">{props.t.gaming}</Link> / {product.name}
        </p>

        <div className="product-top">
          <ProductGallery product={product} t={props.t} />

          <ProductInfo
            product={product}
            qty={qty}
            setQty={setQty}
            size={size}
            setSize={setSize}
            tap={tap}
            wished={wished}
            clickWish={clickWish}
            buyNow={buyNow}
            t={props.t}
          />
        </div>

        <RelatedItems
          productId={product.id}
          wishes={props.wishes}
          addToCart={props.addToCart}
          toggleWish={props.toggleWish}
          t={props.t}
        />
      </div>
    </div>
  )
}

export default Product
