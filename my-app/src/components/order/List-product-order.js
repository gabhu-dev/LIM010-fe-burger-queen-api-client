import React, { useState } from 'react'

const ListProductOrder = ({ el }) => {
  const [line, setLine] = useState(true)
  return (
    <li className="list-group-item">
      <label style={{ textDecoration: !line ? "line-through" : "" }}>
        <input
          onChange={() => line ? setLine(false) : setLine(true)}
          type="checkbox" /> {el.qty} unid. {el.product.name}
      </label>
    </li>
  )
}

export default ListProductOrder;