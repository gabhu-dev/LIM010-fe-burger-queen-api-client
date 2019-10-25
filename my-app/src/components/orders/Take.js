import React from 'react';

const Pedido = ({ selecProduct, name }) => {
  const ArrayProducts = () => {
    const listProducts = [];
    listProducts.push(selecProduct);
    console.log(listProducts);
  }
  console.log(ArrayProducts());

  // const remove = (selecProduct, chosenProduct) => {
  //   const NewArray = selecProduct.filter(product => product.id !== chosenProduct)
  //   return NewArray;
  // }

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
            {/* <tbody>
              {selecProduct.map(prod => (
                <tr key={prod.name}>
                  <td> <input type="number" min="1" max="10" value={prod.qty}></input></td>
                  <td>{prod.name}</td>
                  <td>${prod.price}</td>
                  <td>${prod.total}</td>
                  <td>
                    <button type="button" value={prod._id} className="btn" onClick={() => {remove() }}>x</button>
                  </td>
                </tr>
                
              ))}
              
            </tbody> */}
          </table>
        </div>
        <div>
          <button>ENVIAR</button>
        </div>
      </form>
    </div>
  </React.Fragment>
  )
}

export default Pedido



export const addOrder = (producto, arrPedidos) => {
  const arr = [];
  arr.push(producto);
  console.log(arr);

}