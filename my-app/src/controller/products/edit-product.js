// modifica un producto
// Requiere token de autenticación y que la usuaria sea admin
const editProduct = (token, id, name, price) => fetch(`http://localhost:5000/users/${id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    authorization: `Bearer ${token}`,
  },
  body: {
    name,
    price,
  },
}).then((res) => {
  if (res.status === 200) {
    return res.json();
  } if (res.status === 400) {
    return Promise.reject(new Error('Nada modificado'));
  } if (res.status === 401) {
    return Promise.reject({ message: 'No existe token válido' })
  } else if (res.status === 403) {
    return Promise.reject({ message: 'Es necesario ser administrador' });
  }
  return Promise.reject({ message: 'Producto inexistente' });
});
export default editProduct;
