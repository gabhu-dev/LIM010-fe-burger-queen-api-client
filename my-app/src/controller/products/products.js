// Requiere token de autenticación
const getProducts = (token) => {
  return fetch('http://476f43fc.ngrok.io/products', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (res.status === 200) {
      return res.json();
    }
    return Promise.reject(new Error('No existe token válido'));
  });
};
export default getProducts;
