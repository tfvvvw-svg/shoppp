import { Fragment } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

import Card from '../Card/Card'
import SectionHead from './SectionHead'

function FlashSales(props) {
  let list = []
  let i = 0
  while (i < props.items.length) {
    if (i >= props.pos) {
      if (i < props.pos + 4) {
        list.push(props.items[i])
      }
    }
    i = i + 1
  }

  if (props.showAll) {
    list = props.items
  }

  function prev() {
    props.setPos(props.pos - 1)
  }

  function next() {
    props.setPos(props.pos + 1)
  }

  function toggleAll() {
    props.setShowAll(!props.showAll)
  }

  let boxes = []
  let index = 0
  while (index < props.labels.length) {
    let label = props.labels[index]
    let num = props.nums[index]

    let colon = null
    if (index > 0) {
      colon = (
        <span className="timer-colon">
          <i className="timer-dot" />
          <i className="timer-dot" />
        </span>
      )
    }

    boxes.push(
      <Fragment key={label}>
        {colon}
        <div className="timer-item">
          <span className="timer-label">{props.t[label]}</span>
          <strong className="timer-num">{num}</strong>
        </div>
      </Fragment>
    )

    index = index + 1
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
        wished={props.wishes.indexOf(item.id) !== -1}
        showNew
        showColors
        showHeart
        showEye
        animated
        t={props.t}
      />
    )
    i = i + 1
  }

  let nextOff = false
  if (props.showAll) {
    nextOff = true
  }
  if (props.pos + 4 >= props.items.length) {
    nextOff = true
  }

  return (
    <section className="wrap section-flash section-anim">
      <SectionHead tag={props.t.todays} title={props.t.flashSales}>
        <>
          <div className="timer">{boxes}</div>

          <div className="arrows">
            <button type="button" className="arrow-button" aria-label={props.t.prevProducts} disabled={props.pos === 0} onClick={prev}>
              <FiArrowLeft />
            </button>
            <button type="button" className="arrow-button" aria-label={props.t.nextProducts} disabled={nextOff} onClick={next}>
              <FiArrowRight />
            </button>
          </div>
        </>
      </SectionHead>

      <div className="grid grid-flash">{cards}</div>

      <div className="center">
        <button type="button" className="button" onClick={toggleAll}>
          {props.t.viewAllProducts}
        </button>
      </div>
    </section>
  )
}

export default FlashSales
