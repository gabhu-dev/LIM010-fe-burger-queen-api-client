import getSpecificUser  from '../../../controller/users/id-user';
const fetchMock = require('fetch-mock');

const result={"_id": "bbbb", "email": "waiter@burqerqueen.com", "roles": {"admin": false}}

afterEach(() => {
  fetchMock.reset();
})
describe('getSpecificUser function',() =>{
  it('Have to create an order', async(done)=>{
    fetchMock
    .get('http://localhost:5000/users/bbbb', {
    "_id": "bbbb",
    "email": "waiter@burqerqueen.com",
    "roles": {
    "admin": false
  }
});
    getSpecificUser('ok','bbbb')
    .then(res=>{
      expect(res).toStrictEqual(result)
      done()
    })
  })
  it('Have to be error 400', async(done) => {
    fetchMock
      .get('http://localhost:5000/users/bbbb', 401)
    getSpecificUser('ok','bbbb')
       .catch( err => {
         expect(err.message).toBe('No existe autentificación')
         done()
       })
   }) 

   it('Have to be error 401', async(done) => {
    fetchMock
      .get('http://localhost:5000/users/bbbb', 403)
    getSpecificUser('ok','bbbb')
       .catch( err => {
         expect(err.message).toBe('Debes ser administrador o la misma usuaria')
         done()
       })
   })  
   it('Have to be error 401', async(done) => {
    fetchMock
      .get('http://localhost:5000/users/bbbb', 404)
    getSpecificUser('ok','bbbb')
       .catch( err => {
         expect(err.message).toBe('No existe usuario')
         done()
       })
   })
})