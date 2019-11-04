import React, { useState, useEffect } from 'react';
import Header from '../products/Header'
import OrderCard from './Orders';
import Options from '../Options'
import getOrders from '../../controller/orders/getOrder'

const ViewOrder = (props) => {
  const [orders, setOrders] = useState([]);
  const [type, setType] = useState('pending');

  useEffect(() => {
    getOrders(localStorage.getItem('token'))
    .then((data) => {
      console.log(data)
      setOrders(data)
    })
  }, []);

  return (
    <div >
      <Header props={props}/>
      <div >
        <ul >
          <Options click={() => setType('pending')} options="Pendientes" />
          <Options click={() => setType('delivered')} options="Entregados" />
        </ul>
        <section >
          {orders.length === 0 &&
            <div >
            No hay órdenes pendientes.
            </div>}
          {orders.length !== 0 &&
            orders.map(el => {
              if ((el.status === 'pending' || el.status === 'delivering'|| el.status === 'canceled') && type === 'pending') {
                return <OrderCard order={el}  />
              } else if(el.status === 'delivered' && type === 'delivered') {
                return <OrderCard order={el}  />
              }
            })
          }
        </section>
      </div>
    </div>
  )
}
export default ViewOrder;