// crea una nueva orden
const postOrder = (token, userId, client, products) => {
  return fetch('http://476f43fc.ngrok.io/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      userId,
      client,
      products,
    }),
  }).then((res) => {
    if (res.status === 200) {
      return res.json();
    }
    if (res.status === 400) {
      return Promise.reject(new Error('Ingrese productos'));
    }
    return Promise.reject(new Error('No existe autentificación'));
  });
};
export default postOrder;
