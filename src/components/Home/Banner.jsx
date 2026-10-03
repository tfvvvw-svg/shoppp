import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

function Banner(props) {
  let menu = []
  let i = 0
  while (i < props.menu.length) {
    let key = props.menu[i]
    menu.push(
      <li className="hero-item" key={key}>
        <Link className="hero-link" to="/">
          <span>{props.t[key]}</span>
          <FiChevronRight className="hero-arrow" />
        </Link>
      </li>
    )
    i = i + 1
  }

  let dots = []
  i = 0
  while (i < props.banners.length) {
    let className = 'dot'
    if (i === props.slide) {
      className = 'dot dot-active'
    }

    let index = i
    dots.push(
      <button
        type="button"
        className={className}
        key={props.banners[i]}
        onClick={function () {
          props.setSlide(index)
        }}
        aria-label={props.t.slide + ' ' + (i + 1)}
      />
    )

    i = i + 1
  }

  return (
    <section className="hero wrap">
      <ul className="hero-menu">{menu}</ul>

      <div className="hero-side">
        <img className="hero-banner banner-anim" key={props.slide} src={props.banners[props.slide]} alt={props.t.bannerSale} />
        <div className="dots">{dots}</div>
      </div>
    </section>
  )
}

export default Banner
