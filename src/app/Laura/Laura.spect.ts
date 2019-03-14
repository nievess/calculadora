import { getOperacion } from './getOperacion';

describe ('getOperacion', () => {
    it ('Should return 125 if input is 5*5*5', () => {
        const result = getOperacion(5);
        expect(result).toBe(125);
       
    } );
});
