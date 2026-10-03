import Card from '../Card/Card'
import SectionHead from './SectionHead'

function BestSelling(props) {
  let list = []
  let i = 0
  while (i < props.items.length) {
    if (i < 4) {
      list.push(props.items[i])
    }
    i = i + 1
  }

  if (props.showAll) {
    list = props.items
  }

  function toggleAll() {
    props.setShowAll(!props.showAll)
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
        showHeart
        showEye
        animated
        t={props.t}
      />
    )
    i = i + 1
  }

  return (
    <section className="wrap section-best section-anim">
      <SectionHead tag={props.t.thisMonth} title={props.t.bestSelling}>
        <button type="button" className="button button-view" onClick={toggleAll}>
          {props.t.viewAll}
        </button>
      </SectionHead>

      <div className="grid">{cards}</div>
    </section>
  )
}

export default BestSelling
