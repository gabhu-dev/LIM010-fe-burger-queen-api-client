// Requiere token de autenticación y que la usuaria sea admin
// crear un producto
const addProduct = (token, name, price, type, image) => {
  return fetch('http://476f43fc.ngrok.io/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({name, price, type, image }),
  }).then((resp) => {
    if (resp.status === 200) {
      return resp.json();
    } if (resp.status === 400) {
      return Promise.reject(new Error('Llene todos los campos'));
    } if (resp.status === 401) {
      return Promise.reject(new Error('Requiere autenticacion'));
    } if (resp.status === 403) {
      return Promise.reject(new Error('Es necesario ser administrador'));
    }
    return Promise.reject(new Error('El producto no existe'));
  });
};
export default addProduct;
