const merge = require('../0609/index.js');

describe('test 0609', () => {

    it('merge array length', () => {
        expect(merge([1,2,3,4,0,0,0],4,[2,5,6],3)).toHaveLength(7);
    });

    it('merge array value', () => {
        expect(merge([1,2,3,4,0,0,0],4,[2,5,6],3)).toEqual(expect.arrayContaining([1,2,2,3,4,5,6]));
    });

    it('merge array special', () => {
        expect(merge([1,2,3,4,0,0,0],4,[2,5,6],-1)).toEqual(expect.arrayContaining([1,2,3,4,0,0,0]));
    });

})
