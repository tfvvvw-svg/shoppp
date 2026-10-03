import ps from '../../assets/ps.png'

function NewArrival(props) {
  return (
    <section className="wrap section-new banner-anim">
      <img className="banner-image" src={ps} alt={props.t.newArrival} />
    </section>
  )
}

export default NewArrival