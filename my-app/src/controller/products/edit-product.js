// modifica un producto
// Requiere token de autenticación y que la usuaria sea admin
// name, precio,tipo ,imagen
const editProduct = (token, id, name, price, image, type) => fetch(`http://localhost:5000/products/${id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    authorization: `Bearer ${token}`,
  },
  body: JSON.stringify({
    name,
    price,
    image,
    type,
  }),
}).then((res) => {
  if (res.status === 200) {
    return res.json();
  } if (res.status === 400) {
    return Promise.reject(new Error('Nada modificado'));
  } if (res.status === 401) {
    return Promise.reject(new Error('No existe token válido'));
  } if (res.status === 403) {
    return Promise.reject(new Error('Es necesario ser administrador'));
  }
  return Promise.reject(new Error('Producto inexistente' ));
});
export default editProduct;
