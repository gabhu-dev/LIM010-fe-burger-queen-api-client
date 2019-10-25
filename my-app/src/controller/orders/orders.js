// crea una nueva orden
const postOrder = (userId, client, products, productId, quantity)=>{
  return fetch('http://localhost:5000/orders',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:{
      userId,
      client,
      products,
      productId,
      quantity
    },
  }).then((res)=>{
    if(res.status === 200){
      return res.json()
    }else if(res.status === 400){
      return Promise.reject({message: 'Ingrese productos'})
    }else if (res.status === 401){
      return Promise.reject({message : 'ingrese cabecera'})
    }
  })
}

// const postOrders = (client, products, token) => {
//     return fetch('http://localhost:5000/orders', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + token
//       },
//       body: JSON.stringify({ 'client': client, 'products': products })
//     }).then((resp) => {
//       if (resp.status === 200) {
//         return resp.json()
//       } else if (resp.status === 400) {
//         return Promise.reject({ message: 'No existe productos en la orden. Ingrese productos a la orden' })
//       } else if (resp.status === 401) {
//         return Promise.reject({ message: 'No existe token válido' })
//       }
//       return Promise.reject({ message: resp.statusText })
//     })
  
//   }
//   export default postOrders;