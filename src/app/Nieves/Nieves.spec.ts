import {nieves, nieves2} from './Nieves';

describe ('nieves', () => {
    it ('Should return 25 if input is 5*5', () => {
    const result= nieves(5,5);
    expect(result).toBe(25); 
})
});

describe ('nieves2', () => {
    it ('Should return 5 if input is 5/5', () => {
    const result=nieves2(5,5);
    expect(result).toBe(1);    
})
});
