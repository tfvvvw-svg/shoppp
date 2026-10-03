import { Link } from "react-router-dom"
import "./NotFound.css"

function NotFound(props) {
  let t = props.t

  return (
    <div className="notfound page-anim">
      <div className="wrap">
        <p className="crumbs">
          <Link to="/">{t.home}</Link> / {t.notFound404}
        </p>

        <div className="box">
          <h2 className="title">404 Not Found</h2>
          <p className="text">{t.pageNotFound}</p>
          <Link className="link" to="/">
            {t.backToHome}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
