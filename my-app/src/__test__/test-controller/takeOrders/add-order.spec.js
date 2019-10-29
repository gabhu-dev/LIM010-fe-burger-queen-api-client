import postOrder  from '../../../controller/orders/add-order';
const fetchMock = require('fetch-mock');

const products =[{
  qty: 1,
  product: 'Café americano'
},
{
  qty: 1,
  product: 'Café con leche'
}
];

afterEach(() => {
  fetchMock.reset();
})
describe('postOrder function',() =>{
  it('Have to create an order', async(done)=>{
    fetchMock
    .post('http://localhost:5000/orders',{status:200, body:{"_id": "order1","userId": "waiter@burgerqueen.com",'products':products, "status": "ok", "dateEntry": "10 / 10 / 2019" }});
    postOrder('ok','waiter@burgerqueen.com','gabriela',products)
    .then(res=>{
      expect(res._id).toBe('order1')
      done()
    })
  })
  it('Have to get token error 400', async(done) => {
    fetchMock
      .post('http://localhost:5000/orders', 400)
    postOrder('ok','waiter@burgerqueen.com','gabriela',products)
       .catch( err => {
         expect(err.message).toBe('Ingrese productos')
         done()
       })
   }) 

   it('Have to get token error 401', async(done) => {
    fetchMock
      .post('http://localhost:5000/orders', 401)
    postOrder('ok','waiter@burgerqueen.com','gabriela',products)
       .catch( err => {
         expect(err.message).toBe('No existe autentificación')
         done()
       })
   }) 
})