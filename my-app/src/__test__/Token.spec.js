const fetchMock = require('../__mocks__/node-fetch')
import getToken  from '../components/login/Token.js';
const fetchMock = require( 'fetch-mock' );

afterEach(() => {
  fetchMock.reset();
})

describe('getToken function',  () => {
  it('Have to get token', async(done) => {
    fetchMock
      .post('http://localhost:5000/auth', { status: 200, body: { token: 'ok' } });
    getToken('admin@burgerqueen.com','12345678')
      .then( res => {
        expect(res.token).toBe('ok')
        done()
      })
  })

  it('Have to get token error 400', async(done) => {
    fetchMock
      .post('http://localhost:5000/auth', 400)
    getToken('aaaaa','123456')
       .catch( err => {
         expect(err.message).toBe('Ingrese su usuario y/o contraseña')
         done()
       })
   }) 

   it('Have to get token error 401', async(done) => {
    fetchMock
      .post('http://localhost:5000/auth', 401)
    getToken('aaaaa','123456')
       .catch( err => {
         expect(err.message).toBe('Ingrese correctamente su usuario y/o contraseña')
         done()
       })
   }) 
   
  it('Have to get token error 403', async(done) => {
    fetchMock
      .post('http://localhost:5000/auth', 403)
    getToken('aaaaa','123456')
       .catch( err => {
         expect(err.message).toBe('Ingrese en el área correcta  Admin o Empleado')
         done()
       })
  }) 
})