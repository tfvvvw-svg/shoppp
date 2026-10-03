function CheckoutField(props) {
  let star = null
  if (props.star) {
    star = <span className="ck-star">*</span>
  }

  function change(event) {
    props.setValue(event.target.value)
  }

  return (
    <label className="ck-label">
      {props.label}
      {star}
      <input className="ck-input" type="text" value={props.value} onChange={change} />
    </label>
  )
}

function CheckoutForm(props) {
  function changeSave(event) {
    props.setSaveInfo(event.target.checked)
  }

  return (
    <div className="ck-form form-anim">
      <CheckoutField label={props.t.firstName} star={true} value={props.firstName} setValue={props.setFirstName} />
      <CheckoutField label={props.t.companyName} value={props.company} setValue={props.setCompany} />
      <CheckoutField label={props.t.streetAddress} star={true} value={props.street} setValue={props.setStreet} />
      <CheckoutField label={props.t.apartment} value={props.apartment} setValue={props.setApartment} />
      <CheckoutField label={props.t.townCity} star={true} value={props.city} setValue={props.setCity} />
      <CheckoutField label={props.t.phoneNumber} star={true} value={props.phone} setValue={props.setPhone} />
      <CheckoutField label={props.t.emailAddress} star={true} value={props.email} setValue={props.setEmail} />

      <label className="ck-save">
        <input type="checkbox" checked={props.saveInfo} onChange={changeSave} />
        <span>{props.t.saveInfo}</span>
      </label>
    </div>
  )
}

export default CheckoutForm
