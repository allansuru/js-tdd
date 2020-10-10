/* eslint-disable no-undef */
// chaijs.com

var expect = require('chai').expect

describe('Main', function () {
    let arr = [];
    // roda uma vez antes do bloco
    before(function () {
    })

    // roda uma vez depois do bloco
    after(function () {

    })

    // roda todas as vezes, antes de cada bloco
    beforeEach(function () {
        arr = [1, 2, 3];
    })

    afterEach(function () {

    })


    describe('metod A', function () {
        // context.skip("case 1", function () {
        //     it('should OK', function () {
        //         throw new Error('Error metod A, case 1')
        //     })
        // })

        context("case arrays", function () {

            it('should be an array', function () {
                expect(arr).to.be.a('array')
            });

            it('should have a size of 4 when push another value to the array', function () {
                arr.push(4);
                console.log(arr.length)
            });

            it('should have a size of 2 when pop a value to the array', function () {
                arr.pop();
                console.log(arr.length)
            });

            it('should remove the value 3 when use pop in the array', function () {
                console.log(arr.pop() === 3)
            });
        })
    })
    describe('metod B', function () {
        context("case 1", function () {
            it('should OK', function () {

            })
        })
    })
});