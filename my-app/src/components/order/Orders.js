import React, {useState, useEffect} from 'react'
import ListProductOrder from './List-product-order';
import putOrders from '../../controller/orders/status';

const OrderCard = ({ order }) => {
  const fecha = new Date(order.dateEntry)
  const fechaFinal = new Date(order.dateProcessed)
  const [active, setActive] = useState(true)
  const [timer, setTimer] = useState((Date.now() - fecha.getTime()) / 1000)
  const finalTime = (fechaFinal.getTime() - fecha.getTime()) / 1000;
  const productsArr = order.products;

  const changeStatus = (e) => {
    putOrders(order.client, order.products, localStorage.getItem('token'), order.userId, e.target.value, order._id, order.dateEntry)
      .then((result) => {
        console.log(result)
      })
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
      <div key={order._id} className="column border-top">
        <div className="text-center font-size-1 margin-1">
          Cliente: {order.client}
        </div>
        <div>
        Fecha: {order.dateEntry}
        </div>
        <div>
          {active === true &&
            <div>Tiempo de preparación: 
              {(Math.floor((timer).toFixed(2) / 60)) % 60}:
              {(timer).toFixed() % 60} minutos
            </div>}
          {active === false &&
            <div> Tiempo de preparación: 
              {(Math.floor((finalTime).toFixed(2) / 60)) % 60}:
              {(finalTime).toFixed() % 60} minutos
            </div>}
        </div>
        <div>
            {productsArr && productsArr.map((order) => {
              // eslint-disable-next-line
              return (<ListProductOrder order={order} key={order.product.productId} />)
            })}
        </div>
        <div>
          <div className="font-size-1 margin-1" >
            <label htmlFor="inputGroupSelect02">Status</label>
            <select onChange={changeStatus} value={order.status}  id="inputGroupSelect02">
              <option value="pending">Pendiente</option>
              <option value="delivered">Entregado</option>
            </select>
          </div>
        </div>
      </div>
  )}
  export default OrderCard; 

