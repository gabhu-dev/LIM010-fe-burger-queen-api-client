const getUser = (uid) => {
  return fetch(`urlAPI`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
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
  }
  )
}

export default getUser;