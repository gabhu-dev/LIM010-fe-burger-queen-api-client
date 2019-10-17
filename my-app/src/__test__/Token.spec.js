const fetchMock = require('../__mocks__/node-fetch')
import getToken  from '../components/login/Token.js';
  
describe('getToken function', () => {
  fetchMock
  .mock('http://localhost:5000/auth',200)
  it('Have to get token', (done) => {
    getToken('gabhu@hotmail.com','123456')
      .then( res => {
        console.log(res.token)
        expect(res.token).toBe('ok')
        done()
      })
  it('Have to get token', (done) => {
    getToken()
      .then( res => {
        console.log(res.token)
        expect(res.token).toBe('ok')
        done()
      })
  })
})
