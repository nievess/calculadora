import {leticia} from './Leticia';


describe ('leticia', () => {
    it ('Should return 125 if input is 5+5', () => {
        const result = leticia(5);
        expect(result).toBe(125);
       
    } );
});