// Requiere token de autenticación
const getProducts = (token) => {
  return fetch('http://localhost:5000/products',{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `'Bearer '${token}`,
    },
  }).then((res) => {
    if (res.status === 200) {
      return res.json();
    }
    return Promise.reject(new Error('No existe token válido'));
  });
};
export default getProducts;
