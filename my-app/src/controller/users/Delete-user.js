const deleteUser = (token, id) => {
  return fetch(`http://localhost:5000/users/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  }).then((resp) => {
    if (resp.status === 200) {
      return resp.json()
    } else if (resp.status === 401) {
      return Promise.reject({ message: 'No existe token válido' })
    } else if (resp.status === 403) {
      return Promise.reject({ message: 'Es necesario ser administrador ' })
    } else if (resp.status === 404) {
      return Promise.reject({ message: 'Usuario inexistente' })
    }
    return Promise.reject({ message: resp.statusText })
  })

}
export default deleteUser;