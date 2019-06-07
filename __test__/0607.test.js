const isValid = require('../0607/index.js');

describe('test 0607', () => {

    it('scene 1', () => {
        expect(isValid("()")).toBe(true);
    });
    
    it('scene 2', () => {
        expect(isValid("()[]{}")).toBe(true);
    });
    
    it('scene 3', () => {
        expect(isValid("(]")).toBe(false);
    });
    
    it('scene 4', () => {
        expect(isValid("([)]")).toBe(false);
    });
    
    it('scene 5', () => {
        expect(isValid("{[]}")).toBe(true);
    });

    it('scene 6', () => {
        expect(isValid("{{[]}")).toBe(false);
    });
})
