// crea una nueva usuaria
// Requiere token de autenticación y que la usuaria sea admin

const getUsers = (token, admin)=>{
  return fetch('http://localhost:5000/users',{
    method:'GET',
    headers:{
      'Content-Type': 'application/json',
      'Authorization': 'Bearer' + token
    }
  }).then((res)=>{
    if (res.status === 200) {
      return res.json()
    } else if(res.status === 401){
      return Promise.reject({message:'No hay autenfificación'})
    } else if (res.status === 403) {
      return Promise.reject({ message: 'No es admin' })
    } else{
    return Promise.reject({ message: res.statusText })
  }
})
}
export default getUsers;