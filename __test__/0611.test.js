const maxPorfit = require('../0611/index.js');

describe('test 0610', () => {

    it('maxPorfit one', () => {
        expect(maxPorfit([7,1,5,3,6,4])).toBe(5);
    })

    it('calculate dep 01', () => {
        expect(maxPorfit([7,6,4,3,1])).toBe(0);
    })

})
