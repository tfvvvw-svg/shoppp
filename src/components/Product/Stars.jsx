import { FaRegStar, FaStar, FaStarHalfStroke } from 'react-icons/fa6'

function Stars(props) {
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

export default Stars
