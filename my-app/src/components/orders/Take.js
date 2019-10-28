import React from 'react';
import getOrder from '../../controller/orders/add-order';

const Take = ({ arrayOrder, name, setArrayOrder, total, setTotal }) => {
  const remove = (chosenProduct) => {
    const arrayProductRemove = arrayOrder.filter(product => product.name !== chosenProduct)
    return setArrayOrder(arrayProductRemove);
  }
  const takeTotal = () => {
    const neto = arrayOrder.reduce((a, b) => (a + b.total), 0);
    return setTotal(neto);
  }
  const  send = () => {
    const token = localStorage.getItem('token');
    const products = arrayOrder.map((element) => ({producto: element.name, cantidad: element.qty, total:element.total}));
    getOrder(name, products, token)
    .then((result)=>{
      console.log(result);
        })
    .catch(console.error)
  }
  return (
    <React.Fragment>
    <div className="">
      <form className="">
        <h1>ORDEN</h1>
        <label className="">Cliente: &nbsp;{name}</label>
        <div>
          <table className="">
            <thead className="">
              <tr className="">
                <th>Cantidad</th>
                <th>Producto</th>
                <th>Precio</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {arrayOrder.map(prod => (
                <tr key={prod.name}>
                  <td> <input type="number" min="1" max="10" value={prod.qty}></input></td>
                  <td>{prod.name}</td>
                  <td>S/.{prod.price}</td>
                  <td>S/.{prod.total}</td>
                  <td>
                    <button type="button" value={prod._id} className="btn" onClick={() => {remove(prod.name) }}>x</button>
                  </td>
                </tr>          
              ))}
            </tbody>
          </table>
          <label>TOTAL<textarea onChange={takeTotal()} value={total} /></label>
        </div>
        <div>
          <button  onClick={() => { send(name) }}>ENVIAR PEDIDO</button>
        </div>
      </form>
    </div>
  </React.Fragment>
  )
}
export default Take;
