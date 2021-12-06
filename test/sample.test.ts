import { sum } from "../utils/calcutator";

describe('Sum test',() => {
    test('two plus two is four', () => {
        expect(sum(2,2)).toBe(4);
    });
    
    test('two plus two is four', () => {
        expect(sum(2,2)).toBe(5);
    });
})

export{}