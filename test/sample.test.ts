import {sum, sub} from "../utils/calculator";

describe('Sum test',() => {
    test('two plus two is four', () => {
        expect(sum(2,2)).toBe(4);
    });
    
    test('subtract 4 - 2  = 2', () => {
        expect(sub(4,2)).toBe(1)
    })
})