const deleteOrder = (token, id) => {
    return fetch(`http://localhost:5000/orders/${id}`,{
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
      } else if (resp.status === 404) {
        return Promise.reject({ message: 'Orden inválida' })
      }
      return Promise.reject({ message: resp.statusText })
    })
  
  }
  export default deleteOrder;