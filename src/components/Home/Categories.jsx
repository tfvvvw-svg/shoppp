import { Link } from 'react-router-dom'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

import SectionHead from './SectionHead'

function Categories(props) {
  let list = []
  let i = 0
  while (i < props.categories.length) {
    if (i >= props.pos) {
      if (i < props.pos + 4) {
        list.push(props.categories[i])
      }
    }
    i = i + 1
  }

  function prev() {
    props.setPos(props.pos - 1)
  }

  function next() {
    props.setPos(props.pos + 1)
  }

  let cards = []
  i = 0
  while (i < list.length) {
    let category = list[i]
    cards.push(
      <Link className="category-card" key={category.key} to="/">
        <span className="category-icon">{category.icon}</span>
        <span className="category-name">{props.t[category.key]}</span>
      </Link>
    )
    i = i + 1
  }

  return (
    <section className="wrap section-cats section-anim-2">
      <SectionHead tag={props.t.categories} title={props.t.browseByCategory}>
        <div className="arrows">
          <button type="button" className="arrow-button" aria-label={props.t.prevCategories} disabled={props.pos === 0} onClick={prev}>
            <FiArrowLeft />
          </button>
          <button
            type="button"
            className="arrow-button"
            aria-label={props.t.nextCategories}
            disabled={props.pos + 4 >= props.categories.length}
            onClick={next}
          >
            <FiArrowRight />
          </button>
        </div>
      </SectionHead>

      <div className="category-grid">{cards}</div>
    </section>
  )
}

export default Categories
