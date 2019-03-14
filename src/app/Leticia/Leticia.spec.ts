import {leticia} from './Leticia';
import {leticia2} from './Leticia';

describe ('leticia', () => {
    it ('Should return 10 if input is 5+5', () => {
        const result = leticia(5);
        expect(result).toBe(10);
       
    } );
});




describe ('leticia2', () => {
    it ('Should return 0 if input is 5-5', () => {
        const result = leticia2(5);
        expect(result).toBe(0);
       
    } );
});