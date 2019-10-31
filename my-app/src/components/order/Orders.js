import React from 'react'
import ListProductOrder from './List-product-order';
import putOrders from '../../controller/orders/status';

const OrderCard = ({ order }) => {
  const productsArr = order.products;
  const changeStatus = (e) => {
    putOrders(order.client, order.products, localStorage.getItem('token'), order.userId, e.target.value, order._id)
      .then((result) => {
        console.log(result)
      })
  }
  return (
    <div >
      <div  >
        <div >
          <div >
            <div >Cliente: {order.client}</div>
          </div>
          {/* <p>Hora de Pedido: {order.dateEntry.toDate().getHours()}{':'}{order.dateEntry.toDate().getMinutes()}{':'}{order.dateEntry.toDate().getSeconds()}</p> */}
        </div>
        <div>
          <ul>
            {productsArr && productsArr.map((order) => {
              return (<ListProductOrder order={order} key={order.product.productId} />)
            })}
          </ul>
        </div>
        <div>
          <select onChange={changeStatus} value={order.status}  id="inputGroupSelect02">
            <option value="pending">Pendiente</option>
            <option value="canceled">Cancelado</option>
            <option value="delivering">Por entregar</option>
            <option value="delivered">Entregado</option>
          </select>
          <div >
            <label htmlFor="inputGroupSelect02">Status</label>
          </div>
        </div>
      </div>
    </div >
  )
}
  export default OrderCard; 