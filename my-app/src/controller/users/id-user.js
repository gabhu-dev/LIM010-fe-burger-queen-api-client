const getSpecificUser = (token, idUser) => {
  return fetch(`http://localhost:5000/users/${idUser}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `'Bearer '${token}`,
    },
  }).then((resp) => {
    if (resp.status === 200) {
      return resp.json();
    } if (resp.status === 401) {
      return Promise.reject({ message: 'No existe autentificación' })
    } if (resp.status === 403) {
      return Promise.reject({ message: 'Debes ser administrador o la misma usuaria' })
    } else {
      return Promise.reject({ message:'No existe usuario'})
    }
  })
};
export default getSpecificUser;