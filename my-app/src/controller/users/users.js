// crea una nueva usuaria
// Requiere token de autenticación y que la usuaria sea admin

const getUsers = (token, admin)=>{
  return fetch('http://localhost:5000/users',{
    method:'POST',
    headers:{
      'Content-Type': 'application/json',
      'Authorization': 'Bearer' + token
    },
    body:{
      email,
      password,
      roles:{
        admin
      }
    }
  }).then((res)=>{
    if (res.status === 200) {
      return res.json()
    } else if(res.status === 400){
      return Promise.reject({message:'No hay email o contraseña'})
    } else if (res.status === 401) {
      return Promise.reject({ message: 'No existe token válido' })
    } else if (res.status === 403) {
      return Promise.reject({message: 'Usuaria existente'})
    } else{
    return Promise.reject({ message: res.statusText })
  }
})
}