function SectionHead(props) {
  return (
    <header className="section-head">
      <div>
        <p className="section-tag">
          <span className="tag-bar" />
          {props.tag}
        </p>
        <h2 className="section-title">{props.title}</h2>
      </div>
      {props.children}
    </header>
  )
}

export default SectionHead