import postOrder  from '../../../controller/orders/add-order';
const fetchMock = require('fetch-mock');
afterEach(() => {
  fetchMock.reset();
})
describe('postOrder function',() =>{
  it('Have to create an order', async(done)=>{
    fetchMock
    .post('http://localhost:5000/orders',{status:200, body:{}});
    postOrder()
    .then(res=>{
      expect().toBe()
      done()
    })
  })
  it('Have to get token error 400', async(done) => {
    fetchMock
      .post('http://localhost:5000/orders', 400)
    postOrder('aaaaa','123456')
       .catch( err => {
         expect(err.message).toBe('Ingrese su usuario y/o contraseña')
         done()
       })
   }) 

   it('Have to get token error 401', async(done) => {
    fetchMock
      .post('http://localhost:5000/auth', 401)
    postOrder('aaaaa','123456')
       .catch( err => {
         expect(err.message).toBe('Ingrese correctamente su usuario y/o contraseña')
         done()
       })
   }) 
   
  it('Have to get token error 403', async(done) => {
    fetchMock
      .post('http://localhost:5000/orders', 403)
    postOrder('aaaaa','123456')
       .catch( err => {
         expect(err.message).toBe('Ingrese en el área correcta  Admin o Empleado')
         done()
       })
  }) 
  it('Have to get token error 403', async(done) => {
    fetchMock
      .post('http://localhost:5000/auth', 404)
    postOrder('aaaaa','123456')
       .catch( err => {
         expect(err.message).toBe('Solicite Credenciales con el Administrador')
         done()
       })
  }) 
})