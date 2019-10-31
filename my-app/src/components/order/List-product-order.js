import React, { useState } from 'react'

const ListProductOrder = ({ order }) => {
  const [line, setLine] = useState(true)
  return (
    <li>
      <labproduct style={{ textDecoration: !line ? "line-through" : "" }}>
        <input
          onChange={() => line ? setLine(false) : setLine(true)}
          type="checkbox" /> {order.qty} unid. {order.product}
          {order.dateEntry}
      </labproduct>
    </li>
  )
}

export default ListProductOrder;

