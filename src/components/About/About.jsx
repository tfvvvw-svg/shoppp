import { Link } from 'react-router-dom'
import { FiDollarSign, FiShoppingBag, FiTrendingUp, FiUsers } from 'react-icons/fi'
import person from '../../assets/person.png'
import pref from '../../assets/pref.png'
import sp from '../../assets/sp.png'
import './About.css'

function About(props) {
  return (
    <div className="about-page page-anim">
      <div className="wrap">
        <p className="crumbs">
          <Link to="/">{props.t.home}</Link> / {props.t.about}
        </p>

        <div className="ab-story">
          <div className="ab-text">
            <h2 className="ab-title">{props.t.ourStory}</h2>
            <p className="ab-p">{props.t.storyOne}</p>
            <p className="ab-p">{props.t.storyTwo}</p>
          </div>

          <img className="ab-photo" src={sp} alt={props.t.twoWomen} />
        </div>

        <div className="ab-stats">
          <div className="ab-stat ab-stat-on">
            <span className="ab-icon">
              <FiShoppingBag />
            </span>
            <p className="ab-value">10.5k</p>
            <p className="ab-label">{props.t.statOne}</p>
          </div>

          <div className="ab-stat">
            <span className="ab-icon">
              <FiDollarSign />
            </span>
            <p className="ab-value">33k</p>
            <p className="ab-label">{props.t.statTwo}</p>
          </div>

          <div className="ab-stat">
            <span className="ab-icon">
              <FiUsers />
            </span>
            <p className="ab-value">45.5k</p>
            <p className="ab-label">{props.t.statThree}</p>
          </div>

          <div className="ab-stat">
            <span className="ab-icon">
              <FiTrendingUp />
            </span>
            <p className="ab-value">25k</p>
            <p className="ab-label">{props.t.statFour}</p>
          </div>
        </div>

        <img className="ab-team" src={person} alt={props.t.team} />

        <img className="ab-pref" src={pref} alt={props.t.servicesBanner} />
      </div>
    </div>
  )
}

export default About