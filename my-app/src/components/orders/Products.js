const getSpecificProduct = (name, price) =>{
  return fetch(`http://localhost:5000/products/:${name}`,{
    method:'GET',
    headers:{
      'Content-Type': 'application/json'
    },
    body:{
      name,
      price
    }
  }).then((res)=>{
    if(res.status === 200){
      return res.jsonI()
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