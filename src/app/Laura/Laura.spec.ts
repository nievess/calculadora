import { Operacion } from './getOperacion';
import { getOperacion2 } from './getOperacion';


describe ('Operacion', () => {
    it ('Should return 125 if input is 5*5*5', () => {
        const result = Operacion(5);
        expect(result).toBe(125);
       
    } );
});



describe ('getOperacion2', () => {
    it ('Should return 16 if input is 100 * 16', () => {
       const result = getOperacion2(100,16);
        expect(result).toBe(16);
       
    } );
});