// borra una usuaria
const deleteUser = (token, id) => {
  return fetch(`http://476f43fc.ngrok.io/users/${id}`, {
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
      return Promise.reject(new Error('Es necesario ser administrador '));
    }
    return Promise.reject(new Error('Usuario inexistente'));
  });
}
export default deleteUser;
