// Requiere token de autenticación
const getProducts = (token)=>{
  return fetch('http://localhost:5000/products',{
    method:'GET',
    headers:{
      'Content-Type': 'application/json',
      'authorization': 'Bearer ' + token
    }
  }).then((res)=>{
    if (res.status === 200) {
      return res.json()
    } else if (res.status === 401) {
      return Promise.reject({ message: 'No existe token válido' })
    } else{
    return Promise.reject({ message: res.statusText })
  }
})
}
export default getProducts;