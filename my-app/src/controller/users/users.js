// crea una nueva usuaria
// Requiere token de autenticación y que la usuaria sea admin

const getUsers = (token) => {
  return fetch('http://localhost:5000/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (res.status === 200) {
      return res.json();
    } 
    if (res.status === 401) {
      return Promise.reject(new Error('No hay autenfificación'));
    } 
    if (res.status === 403) {
      return Promise.reject(new Error('No es admin'));
    }
    return Promise.reject(new Error(res.statusText));
  });
};
export default getUsers;
