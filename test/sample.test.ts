import { sum } from "../utils/calculator";

describe('Sum test',() => {
    test('two plus two is four', () => {
        expect(sum(2,2)).toBe(4);
    });
    
})