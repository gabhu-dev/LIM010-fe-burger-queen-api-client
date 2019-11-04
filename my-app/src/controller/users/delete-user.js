// borra una usuaria
const deleteUser = (token, id) => {
  return fetch(`http://localhost:5000/users/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'authorization': 'Bearer' + token 
    }
  }).then((res) => {
    if (res.status === 200) {
      return res.json()
    } else if (res.status === 401) {
      return Promise.reject({ message: 'No existe token válido' })
    } else if (res.status === 403) {
      return Promise.reject({ message: 'Es necesario ser administrador ' })
    } else if (res.status === 404) {
      return Promise.reject({ message: 'Usuario inexistente' })
    }
    return Promise.reject({ message: res.statusText })
  })

}
export default deleteUser;