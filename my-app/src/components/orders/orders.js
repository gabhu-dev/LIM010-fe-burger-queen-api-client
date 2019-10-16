const postOrders = (client, products, token, userId) => {
    return fetch('http://localhost:5000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({ 'userId': userId, 'client': client, 'products': products })
    }).then((resp) => {
      if (resp.status === 200) {
        return resp.json()
      } else if (resp.status === 400) {
        return Promise.reject({ message: 'Ingrese productos a la orden' })
      } else if (resp.status === 401) {
        return Promise.reject({ message: 'No existe token válido' })
      }
      return Promise.reject({ message: resp.statusText })
    })
  
  }
  export default postOrders;