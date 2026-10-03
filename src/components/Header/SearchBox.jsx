function SearchBox(props) {
  function changeWord(event) {
    props.setWord(event.target.value)
  }

  let list = null

  if (props.word) {
    let none = null
    if (props.found.length === 0) {
      none = <p className="find-none">{props.t.noResults}</p>
    }

    let items = []
    let i = 0
    while (i < props.found.length) {
      let item = props.found[i]
      let id = item.id
      items.push(
        <button
          type="button"
          className="find-item"
          key={item.id}
          onClick={function () {
            props.openProduct(id)
          }}
        >
          <img className="find-image" src={item.image} alt={item.name} />
          <span className="find-name">{item.name}</span>
          <span className="find-price">${item.price}</span>
        </button>
      )
      i = i + 1
    }

    list = (
      <div className="find-list">
        {none}
        {items}
      </div>
    )
  }

  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        placeholder={props.t.search}
        value={props.word}
        onChange={changeWord}
      />

      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="10.5" cy="10.5" r="7" />
        <line x1="15.8" y1="15.8" x2="21" y2="21" strokeLinecap="round" />
      </svg>

      {list}
    </div>
  )
}

export default SearchBox
