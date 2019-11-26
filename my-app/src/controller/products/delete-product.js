// elimina un producto
// Requiere token de autenticación y que la usuaria sea admin
const deleteProducts = (token, idProduct) => {
  return fetch(`http://localhost:5000/products/${idProduct}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    }
  }).then((res) => {
    if (res.status === 200) {
      return res.json();
    } if (res.status === 401) {
      return Promise.reject(new Error('No existe token válido'));
    } if (res.status === 403) {
      return Promise.reject(new Error('Es necesario ser administrador'));
    }
    return Promise.reject(new Error('Producto inexistente' ));
  });
};
export default deleteProducts;
