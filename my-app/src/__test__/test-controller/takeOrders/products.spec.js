// obtener productos
import getProducts from '../../../controller/products/products';
const fetchMock = require('fetch-mock');

afterEach(() => {
  fetchMock.reset();
})
describe('getProducts function',()=>{
  it('have to obtain 200',async(done)=>{
    fetchMock
    .get('http://localhost:5000/products', [{
      "_id":"0001",
      "name":"Café americano",
      "price":5,
      "image":"http://www.cinemaburger.com/wp-content/uploads/2017/04/bebida-c-cafe.jpg",
      "type":"desayuno",
      "dateEntry":"10/10/10"
  },
  {
      "_id":"0002",
      "name":"Café con leche",
      "price":7,
      "image":"https://cocinarrecetasdepostres.net/wp-content/uploads/2019/05/wordpressomatic/Cafe-con-leche-recipe-coffee-in-Madrid.jpg5cd08045cb668.jpg",
      "type":"desayuno",
      "dateEntry":"10/10/10"
  }]);
  getProducts('ok')
  .then(res =>{
    expect(res[0]._id).toBe('0001')
    done()
  })
  })
  it('have to be 401',async(done)=>{
    fetchMock
    .get('http://localhost:5000/products',401)
    getProducts('ok')
    .catch(err=> {
      expect(err.message).toBe('No existe token válido')
      done()
    })
  })
})