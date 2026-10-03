import jbl from '../../assets/jbl.png'

function Jbl(props) {
  return (
    <section className="wrap section-jbl banner-anim">
      <img className="banner-image" src={jbl} alt={props.t.jblBanner} />
    </section>
  )
}

export default Jbl