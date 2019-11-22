const getOrders = (token) => {
  return fetch('http://476f43fc.ngrok.io/orders', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  }).then((resp) => {
    if (resp.status === 200) {
      return resp.json();
    }
    return Promise.reject(new Error('Ingrese token válido'));
  });
};
export default getOrders;
