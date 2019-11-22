const getToken = (email, password) => {
  return fetch('http://476f43fc.ngrok.io/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then((resp) => {
    if (resp.status === 200) {
      return resp.json();
    }
    if (resp.status === 400) {
      return Promise.reject(new Error('Ingrese su usuario y/o contraseña'));
    }
    if (resp.status === 401) {
      return Promise.reject(new Error('Ingrese correctamente su usuario y/o contraseña'));
    }
    if (resp.status === 403) {
      return Promise.reject(new Error('Ingrese en el área correcta  Admin o Empleado'));
    }
    return Promise.reject(new Error('Solicite Credenciales con el Administrador'));
  });
};

export default getToken;
