const getSpecificUser = (token, idUser) => {
  return fetch(`http://localhost:5000/users/${idUser}`,{
    method: 'GET',
    headers: {
     'Content-Type': 'application/json',
     'Authorization': 'Bearer ' + token
    },
  }).then((resp) => {
    if (resp.status === 200) {
      return resp.json()
    } else if (resp.status === 401) {
      return Promise.reject({ message: 'No es valido' })
    } else if (resp.status === 404) {
      return Promise.reject({ message: 'El producto no existe' })
    } else {
      return Promise.reject({ message:resp.statusText })
    }
  })
};