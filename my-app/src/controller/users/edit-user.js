const editUser = (token, id, email, password) => {
  return fetch(`http://476f43fc.ngrok.io/users/${id}`,{
    method:'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    if (res.status === 200) {
      return res.json();
    } 
    if (res.status === 400) {
      return Promise.reject(new Error('Nada modificado'))
    } 
    if (res.status === 401) {
      return Promise.reject(new Error('No existe token válido'))
    } 
    if (res.status === 403) {
      return Promise.reject({ message: 'Es necesario ser administrador'})
    } 
    return Promise.reject({ message: 'Usuario inexistente' })

  })
}
export default editUser;
