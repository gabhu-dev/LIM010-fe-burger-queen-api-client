// crea una nueva orden
// crea una nueva orden
const postOrder = (token, userId, client, products)=>{
  return fetch('http://localhost:5000/orders',{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
      'Authorization': 'Bearer ' + token
    },
    body:{
      userId,
      client,
      products
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
export default postOrder;