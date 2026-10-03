import { FiArrowUp } from 'react-icons/fi'

function BackToTop(props) {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="wrap top-button">
      <button type="button" className="top-icon" aria-label={props.t.backToTop} onClick={scrollToTop}>
        <FiArrowUp />
      </button>
    </div>
  )
}

export default BackToTop