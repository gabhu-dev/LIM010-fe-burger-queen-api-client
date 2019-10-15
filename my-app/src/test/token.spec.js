import getToken from '../components/login/token.js';
describe('getToken function',()=>{
  it('Have to get token',()=>{
    getToken('gabhu@hotmail.com','123456')
    .then(res => expect(res.status).toBe(200))
  })
})