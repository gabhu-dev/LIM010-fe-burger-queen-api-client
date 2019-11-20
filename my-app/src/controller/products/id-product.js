// informacion especifica de un producto
// Requiere token de autenticación
const getSpecificProduct = (token, name, price, idProduct) => {
  return fetch(`http://localhost:5000/products/${idProduct}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `'Bearer '${token}`,
    },
    body: {
      name,
      price,
    },
  }).then((resp) => {
    if (resp.status === 200) {
      return resp.json();
    } else if (resp.status === 401) {
      return Promise.reject({ message: 'No es valido' })
    } else if (resp.status === 404) {
      return Promise.reject({ message: 'El producto no existe' })
    } else {
      return Promise.reject({ message:resp.statusText })
    }
  })
};
export default getSpecificProduct;
