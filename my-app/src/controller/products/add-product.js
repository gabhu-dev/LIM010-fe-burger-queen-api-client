// Requiere token de autenticación y que la usuaria sea admin
// crear un producto
const addProduct = (token, name, price, admin) => {
    return fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: {
       'Content-Type': 'application/json',
       'Authorization': 'Bearer ' + token
      },
      body: { 
        email, 
        name,
        price,
        admin 
      },
    }).then((resp) => {
      if (resp.status === 200) {
        return resp.json()
      } else if (resp.status === 400) {
        return Promise.reject({ message: 'Llene todos los campos' })
      } else if (resp.status === 401) {
        return Promise.reject({ message: 'Requiere autenticacion' })
      } else if (resp.status === 403) {
        return Promise.reject({ message: 'Es necesario ser administrador' })
      } else if(resp.status === 404){
        return Promise.reject({message: 'El producto no existe'})
      }else {
        return Promise.reject({ message: resp.statusText})
      }
    })
  };