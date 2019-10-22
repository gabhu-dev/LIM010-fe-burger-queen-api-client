// elimina un producto
// Requiere token de autenticación y que la usuaria sea admin
const deleteProducts = (token, idProduct)=>{
  return fetch(`http://localhost:5000/products/${idProduct}`,{
    method: 'DELETE',
    headers:{
      'Content-Type': 'application/json',
      'Authorization': 'Bearer' + token
    }
  }).then((res)=>{
    if (res.status === 200) {
      return res.json()
    } else if (res.status === 401) {
      return Promise.reject({ message: 'No existe token válido' })
    } else if (res.status === 403) {
      return Promise.reject({ message: 'Es necesario ser administrador ' })
    } else if (res.status === 404) {
      return Promise.reject({ message: 'Producto inexistente' })
    }
    return Promise.reject({ message: res.statusText })
  })
}