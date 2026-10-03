  import services from '../../assets/services.png'

  function Services(props) {
    return (
      <section className="wrap section-services banner-anim">
        <img className="services-image" src={services} alt={props.t.servicesBanner} />
      </section>
    )
  }

  export default Services