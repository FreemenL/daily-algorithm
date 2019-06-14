const maxProfit = require('../0612/index.js');

describe('test 0610', () => {
    it('maxPorfit one', () => {
        expect(maxProfit([1,2,3,4,5])).toBe(4);
    })

    it('maxPorfit two', () => {
        expect(maxProfit([7,6,4,3,1])).toBe(0);
    })

})
