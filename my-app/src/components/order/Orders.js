import React, { useState, useEffect } from 'react'
import ProductList from './product-list';
import putOrders from '../../controller/orders/status'
import deleteOrder from '../../controller/orders/delete';

const OrderCard = ({ order }) => {
  const fecha = new Date(order.dateEntry)
  const fechaFinal = new Date(order.dateProcessed)
  const productsArr = order.products
  const [active, setActive] = useState(true)
  const [timer, setTimer] = useState((Date.now() - fecha.getTime()) / 1000)
  const finalTime = (fechaFinal.getTime() - fecha.getTime()) / 1000;

  const changeStatus = (e) => {
    putOrders(order.client, order.products, localStorage.getItem('token'), order.userId, e.target.value, order._id)
      .then(console.log)
    // deleteOrder(localStorage.getItem('token'), order._id)
    //   .then(console.log)
  }

  useEffect(() => {
    let interval = null;

    if (order.status === 'delivered') {
      setActive(false)
    }
    if (active) {
      interval = setInterval(() => {
        setTimer(timer + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [active, timer])

  return (
    <div data-testid={order._id} className="col-sm-6 mt-3">
      <div className="card" >
        <div className="card-header d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <div data-testid={order.client} className="border-card-right pr-2">Cliente: {order.client}</div>
            {/* <div className="pl-2"></div> */}
          </div>
          {active === true &&
            <div>
              {(Math.floor((timer).toFixed() / 60)) % 60}:
            {(timer).toFixed() % 60}
            </div>}
          {active === false &&
            <div>
              {(Math.floor((finalTime).toFixed() / 60)) % 60}:
            {(finalTime).toFixed() % 60}
            </div>}
        </div>
        <div className="card-body">
          <ul className="list-group">
            {productsArr && productsArr.map((el) => {
              return (<ProductList el={el} key={el.product.productId} />)
            })}
          </ul>
        </div>
        <div className="input-group card-footer">
          <select data-testid={`name-${order.client}`} onChange={changeStatus} value={order.status} className="custom-select" id="inputGroupSelect02">
            <option value="pending">Pending</option>
            <option value="canceled">Canceled</option>
            <option data-testid={`delivering-${order.client}`} value="delivering">Delivering</option>
            <option data-testid={`delivered-${order.client}`} value="delivered">Delivered</option>
          </select>
          <div className="input-group-append">
            <label className="input-group-text" htmlFor="inputGroupSelect02">Status</label>
          </div>
        </div>
      </div>
    </div >
  )
}

export default OrderCard