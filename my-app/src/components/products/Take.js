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
      <form className='take-container' >
        <h1>ORDEN</h1>
        <label  className='border-top font-size-15's>Cliente: &nbsp;{name}</label>
        <div>
          <table>
            <thead className="font-size-15">
              <tr className="">
                <th>Cantidad</th>
                <th>Producto</th>
                <th>Precio</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {arrayOrder.map(prod => (
                <tr key={prod.name} className='border-top margin-1 font-size-1'>
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
        </div>
        <div className='margin-1'>
          <div>
            <label className='border-top font-size-15' onChange={takeTotal()}><b>TOTAL S/. {total}.00  </b></label>
          </div>
          <div>
            <button  className=' font-size-15' onClick={(e) => sendPostOrders(e.preventDefault())}>ENVIAR PEDIDO</button>
          </div>
        </div>
      </form>
  )
}
export default Take;