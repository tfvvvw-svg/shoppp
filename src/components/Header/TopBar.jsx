import { Link } from 'react-router-dom'

function TopBar(props) {
  let enClass = 'lang-button'
  let uzClass = 'lang-button'

  if (props.lang === 'en') {
    enClass = 'lang-active'
  }
  if (props.lang === 'uz') {
    uzClass = 'lang-active'
  }

  function setEn() {
    props.setLang('en')
  }

  function setUz() {
    props.setLang('uz')
  }

  return (
    <div className="top">
      <div className="wrap top-row">
        <div className="top-side"></div>

        <p className="top-text">
          {props.t.topText}{' '}
          <Link className="top-link" to="/">
            {props.t.shopNow}
          </Link>
        </p>

        <div className="top-side top-lang">
          <button type="button" className={enClass} onClick={setEn}>
            {props.t.langEn}
          </button>
          <span className="lang-sep">/</span>
          <button type="button" className={uzClass} onClick={setUz}>
            {props.t.langUz}
          </button>
        </div>
      </div>
    </div>
  )
}

export default TopBar
