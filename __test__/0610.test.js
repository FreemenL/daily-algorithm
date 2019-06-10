const maxDepth = require('../0610/index.js');

describe('test 0610', () => {

    it('calculate dep', () => {
        expect(maxDepth({
            current:2,
            left:1,
            right:{
                current:3,
                left:4,
                right:5
            }
        })).toBe(3);
    })

    it('calculate dep 01', () => {
        expect(maxDepth()).toBe(0);
    })

    it('calculate dep 02', () => {
        expect(maxDepth({current:1})).toBe(1);
    })
})
