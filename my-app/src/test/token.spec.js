// const getToken = require ('../components/login/Token.js');
import getToken from '../components/login/Token.js';
describe('getToken function',()=>{
  it('Have to get token',(done)=>{
    getToken('gabhu@hotmail.com','123456')
    .then(res => {
      expect(res.token).toBe('ok') 
    done()
  })  
  })
})  