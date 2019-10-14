const getUser = (uid) => {
  return fetch(`http://localhost:5000/users/:${uid}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((resp) => {
    if (resp.status === 200) {
      return resp.json()
    } else if (resp.status === 401) {
      return Promise.reject({ message: 'No hay cabecera de autenticación'})
    }
     else {
      return Promise.reject({ message: resp.statusText })
    }
  })
}

export default getUser;

