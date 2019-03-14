import { getOperacion } from './getOperacion';
import { getOperacion2 } from './getOperacion';


describe ('getOperacion', () => {
    it ('Should return 125 if input is 5*5*5', () => {
        const result = getOperacion(5);
        expect(result).toBe(125);
       
    } );
});



describe ('getOperacion2', () => {
    it ('Should return 16 if input is 100', () => {
       const result = getOperacion2(10);
        expect(result).toBe(16);
       
    } );
});