const getOrders = (token) => {
    return fetch('http://localhost:5000/orders', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    }).then((resp) => {
      if (resp.status === 200) {
        return resp.json()
      } else if (resp.status === 401) {
        return Promise.reject({ message: 'Ingrese token válido' })
      }
      return Promise.reject({ message: resp.statusText })
    })
  
  }
  export default getOrders;