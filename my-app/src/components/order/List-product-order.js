import React, { useState } from 'react';

const ListProductOrder = ({ order }) => {
  const [line, setLine] = useState(true)
  return (
    <div className="font-size-1 margin-1">
      <label style={{ textDecoration: !line ? "line-through" : "" }}>
        <input
          onChange={() => line ? setLine(false) : setLine(true)}
          type="checkbox"/> {order.qty} unid. {order.product}
      </label>
    </div>
  )
}

export default ListProductOrder;
