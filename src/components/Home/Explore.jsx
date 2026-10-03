

import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

import Card from '../Card/Card'
import SectionHead from './SectionHead'

function Explore(props) {
  let list = []
  let i = 0
  while (i < props.items.length) {
    if (i >= props.pos) {
      if (i < props.pos + 8) {
        list.push(props.items[i])
      }
    }
    i = i + 1
  }

  if (props.showAll) {
    list = props.items
  }

  function prev() {
    props.setPos(props.pos - 4)
  }

  function next() {
    props.setPos(props.pos + 4)
  }

  function toggleAll() {
    props.setShowAll(!props.showAll)
  }

  let nextOff = false
  if (props.showAll) {
    nextOff = true
  }
  if (props.pos + 8 >= props.items.length) {
    nextOff = true
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
        inline
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

  return (
    <section className="wrap section-explore section-anim-2">
      <SectionHead tag={props.t.ourProducts} title={props.t.exploreProducts}>
        <div className="arrows">
          <button type="button" className="arrow-button" aria-label={props.t.prevProducts} disabled={props.pos === 0} onClick={prev}>
            <FiArrowLeft />
          </button>
          <button type="button" className="arrow-button" aria-label={props.t.nextProducts} disabled={nextOff} onClick={next}>
            <FiArrowRight />
          </button>
        </div>
      </SectionHead>

      <div className="grid grid-explore">{cards}</div>

      <div className="center">
        <button type="button" className="button" onClick={toggleAll}>
          {props.t.viewAllProducts}
        </button>
      </div>
    </section>
  )
}

export default Explore
