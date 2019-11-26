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
      return resp.json();
    } if (resp.status === 401) {
      return Promise.reject(new Error('No es valido'));
    }
    return Promise.reject(new Error('El producto no existe'));
  });
};
export default getSpecificProduct;
