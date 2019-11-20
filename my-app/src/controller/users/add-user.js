// crear una usuaria
const addUser = (token, email, password) => {
  return fetch('https://33972986.ngrok.io/users', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
     authorization: `'Bearer '${token}`,
    },
    body: JSON.stringify({ 'email': email, 'password': password }),
  }).then((resp) => {
    if (resp.status === 200) {
      return resp.json();
    } else if (resp.status === 400) {
      return Promise.reject({ message: 'Ingrese su usuario y/o contraseña' })
    } else if (resp.status === 401) {
      return Promise.reject({ message: 'Ingrese correctamente su usuario y/o contraseña' })
    } else if (resp.status === 403) {
      return Promise.reject({ message: 'Ingrese en el área correcta  Admin o Empleado' })
    } else {
      return Promise.reject({ message: 'Solicite Credenciales con el Administrador' })
    }
  })
};

export default addUser;