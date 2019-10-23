const editStatus = (client, products, token, userId, status, id) => {
    return fetch(`http://localhost:5000/orders/${id}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({ 
        userId, 
        client, 
        products, 
        status })
    }).then((resp) => {
      if (resp.status === 200) {
        return resp.json()
      } else if (resp.status === 400) {
        return Promise.reject({ message: 'Propiedad inválida a modificar' })
      } else if (resp.status === 401) {
        return Promise.reject({ message: 'No existe token válido' })
      } else if (resp.status === 404) {
        return Promise.reject({ message: 'La orden no existe' })
      }
      return Promise.reject({ message: resp.statusText })
    })
  
  }
  export default editStatus;