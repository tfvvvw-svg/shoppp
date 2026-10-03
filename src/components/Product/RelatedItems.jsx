import Card from '../Card/Card'
import { PRODUCTS } from '../../products'

let IDS = [2, 3, 1, 4, 5]

function RelatedItems(props) {
  let list = []

  let i = 0
  while (i < IDS.length) {
    let wantId = IDS[i]

    if (wantId !== props.productId) {
      let j = 0
      while (j < PRODUCTS.length) {
        if (PRODUCTS[j].id === wantId) {
          list.push(PRODUCTS[j])
        }
        j = j + 1
      }
    }

    i = i + 1
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
        t={props.t}
      />
    )
    i = i + 1
  }

  return (
    <section className="product-related">
      <p className="section-tag">
        <span className="tag-bar" />
        {props.t.relatedItem}
      </p>

      <div className="grid">{cards}</div>
    </section>
  )
}

export default RelatedItems
