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
})