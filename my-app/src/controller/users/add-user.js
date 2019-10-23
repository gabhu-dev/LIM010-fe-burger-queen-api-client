// crear una usuaria
const addUser = (token, email, password, admin) => {
    return fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
       'Content-Type': 'application/json',
       'Authorization': 'Bearer ' + token
      },
      body: { 
        email, 
        password,
        admin 
      },
    }).then((resp) => {
      if (resp.status === 200) {
        return resp.json()
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