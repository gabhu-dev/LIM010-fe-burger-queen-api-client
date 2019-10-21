const getSpecificProduct = () =>{
  return fetch('http://localhost:5000/products',{
    method:'GET',
    headers:{
      'Content-Type': 'application/json'
    },
  }).then((res)=>{
    if(res.status === 200){
      return res.json()
    }else if (res.status === 401){
      return Promise.reject({message: '	si no hay cabecera de autenticación'})
    }else if(res.status === 404){
      return Promise.reject({message: 'el producto no existe'})
    }else{
      return Promise.reject({message: 'otro error'})
    }
  })
}
export default getSpecificProduct;