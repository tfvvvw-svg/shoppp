import { Link } from 'react-router-dom'
import { FiMail, FiPhone } from 'react-icons/fi'
import './Contact.css'

function Contact(props) {
  return (
    <div className="contact-page page-anim">
      <div className="wrap">
        <p className="crumbs">
          <Link to="/">{props.t.home}</Link> / {props.t.contact}
        </p>

        <div className="ct-card">
          <div className="ct-info">
            <div className="ct-item">
              <span className="ct-icon">
                <FiPhone />
              </span>
              <p className="ct-title">{props.t.callToUs}</p>
            </div>
            <p className="ct-text">{props.t.available247}</p>
            <p className="ct-text">{props.t.phoneLabel} +8801611112222</p>

            <hr className="ct-line" />

            <div className="ct-item">
              <span className="ct-icon">
                <FiMail />
              </span>
              <p className="ct-title">{props.t.writeToUs}</p>
            </div>
            <p className="ct-text">{props.t.fillForm}</p>
            <p className="ct-text">{props.t.emails} customer@exclusive.com</p>
            <p className="ct-text">{props.t.emails} support@exclusive.com</p>
          </div>

          <form className="ct-form form-anim">
            <div className="ct-row">
              <input type="text" placeholder={props.t.yourName} />
              <input type="email" placeholder={props.t.yourEmail} />
              <input type="text" placeholder={props.t.yourPhone} />
            </div>

            <textarea placeholder={props.t.yourMessage} />

            <div className="ct-btn">
              <button type="button" className="btn-red ct-send">
                {props.t.sendMessage}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact