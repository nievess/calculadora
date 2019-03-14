import {res3num} from './res3num';
import {} from 'jasmine' ;
describe('res3num',()=>{
    
it ('resta de 3 numeros',()=>{
  let mydiv = res3num(10,2,2);
    let result = res3num(10,2,2);
    expect(result).toBe(6);
    
    })
})

