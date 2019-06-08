const removeDuplicates = require('../0608/index.js');

describe('test 0608', () => {

    it('removeDuplicates1', () => {
        expect(removeDuplicates([1,1,1,2,2,3,3])).toBe(3);
    });

    it('removeDuplicates1', () => {
        expect(removeDuplicates([11,22,22,33,3,44])).toBe(5);
    });
    
})
