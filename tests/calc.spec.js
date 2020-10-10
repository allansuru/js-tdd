/* eslint-disable no-undef */
var expect = require('chai').expect
var calc = require('../src/calc')

describe('Calc', function () {

    // smoke tests
    describe('Smoke tests', function () {

        it('should exist the calc libs', function () {
            expect(calc).to.exist
        });

        it('should exist method `sum`', function () {
            expect(calc.sum).to.exist;
        });

        it('should exist method `sub`', function () {
            expect(calc.sub).to.exist;
        });

        it('should exist method `mult`', function () {
            expect(calc.mult).to.exist;
        });

        it('should exist method `div`', function () {
            expect(calc.div).to.exist;
        });
    })

    describe('Methods', function () {
        describe('Sum', function () {
            it('should return 4 when `sum(2,2)`', function () {
                expect(calc.sum(2, 2)).to.equal(4)
            });
        });

        describe('Sub', function () {
            it('should return 0 when `sub(2,2)`', function () {
                expect(calc.sub(2, 2)).to.equal(0)
            });
        });

        describe('Sub', function () {
            it('should return 4 when `sub(2,2)`', function () {
                expect(calc.mult(2, 2)).to.equal(4)
            });
        });

        describe('Div', function () {
            it('should return 2 when `div(4,2)`', function () {
                expect(calc.div(4, 2)).to.equal(2)
            });
        });
    })
})