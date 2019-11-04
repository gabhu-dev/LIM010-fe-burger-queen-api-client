import React from 'react';


const Take = ({ arrayOrder, name, setArrayOrder, total, setTotal, sendPostOrders}) => {
  const remove = (chosenProduct) => {
    const arrayProductRemove = arrayOrder.filter(product => product.name !== chosenProduct)
    return setArrayOrder(arrayProductRemove);
  }
  const takeTotal = () => {
    const neto = arrayOrder.reduce((a, b) => (a + b.total), 0);
    return setTotal(neto);
  }

  return (
    <>
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
                  <td>{prod.qty}</td>
                  <td>{prod.name}</td>
                  <td>S/.{prod.price}</td>
                  <td>S/.{prod.total}</td>
                  <td>
                    <button type="button" value={prod._id} className="btn" onClick={() => {remove(prod.name) }}><i class="fas fa-trash"></i></button>
                  </td>
                </tr>          
              ))}
            </tbody>
          </table>
          <label onChange={takeTotal()}> TOTAL S/. {total}.00  </label>
        </div>
        <div>
        <button  onClick={(e) => sendPostOrders(e.preventDefault())}>ENVIAR PEDIDO</button>
        </div>
      </form>
    </div>
  </>
  )
}
export default Take;
