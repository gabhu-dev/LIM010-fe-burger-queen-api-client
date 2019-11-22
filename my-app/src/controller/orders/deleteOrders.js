const deleteOrder = (token, id) => {
  return fetch(`http://localhost:5000/orders/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  }).then((resp) => {
    if (resp.status === 200) {
      return resp.json();
    } if (resp.status === 401) {
      return Promise.reject(new Error('No existe token válido'));
    }
    return Promise.reject(new Error('Orden inválida'));
  });
}
export default deleteOrder;
