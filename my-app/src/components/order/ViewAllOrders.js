import React, { useState, useEffect } from 'react';
import Header from '../products/Header';
import OrderCard from './Orders';
import getOrders from '../../controller/orders/getOrder';

const ViewAllOrders = (props) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const interval = () => {
      getOrders(localStorage.getItem('token'))
        .then((data) => {
          console.log(data);
          setOrders(data);
        });
    };
    interval();
    const processId = setInterval(interval, 2000);
    return () => clearInterval(processId);
  }, []);

  return (
    <div className="container-fluid">
      <Header props={props} />
      <div className="w-100">
        <section className="subproducts-container">
          {orders.length !== 0
            && orders.map((el) => {
              return <OrderCard order={el} key={el._id} />;
            }).sort((a, b) => {
              const aValue = a.props.order.dateEntry;
              const bValue = b.props.order.dateEntry;
              if (new Date(aValue) > new Date(bValue)) {
                return 1;
              } if (new Date(aValue) < new Date(bValue)) {
                return -1;
              }
              return 0;
            })}
        </section>
      </div>
    </div>
  )
}
export default ViewAllOrders;
