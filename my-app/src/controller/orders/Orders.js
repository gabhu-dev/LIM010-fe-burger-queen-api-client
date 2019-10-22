// crea una nueva orden
const getOrder = (userId, client, products, productId, quantity)=>{
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