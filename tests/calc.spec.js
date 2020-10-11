/* eslint-disable no-undef */

import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/calc';


describe('Calc', () => {

    // smoke tests
    describe('Smoke tests', () => {


        it('should exist method `sum`', () => {
            expect(sum).to.exist;
        });

        it('should exist method `sub`', () => {
            expect(sub).to.exist;
        });

        it('should exist method `mult`', () => {
            expect(mult).to.exist;
        });

        it('should exist method `div`', () => {
            expect(div).to.exist;
        });
    })

    describe('Methods', () => {
        describe('Sum', () => {
            it('should return 4 when `sum(2,2)`', () => {
                expect(sum(2, 2)).to.equal(4)
            });

            it('should return -4 when `sum(6,-10)`', () => {
                expect(sum(6, -10)).to.equal(-4)
            });
        });

        describe('Sub', () => {
            it('should return 0 when `sub(2,2)`', () => {
                expect(sub(2, 2)).to.equal(0)
            });
        });

        describe('Sub', () => {
            it('should return 4 when `sub(2,2)`', () => {
                expect(mult(2, 2)).to.equal(4)
            });

            it('should return -4 when `sub(6,10)`', () => {
                expect(sub(6, 10)).to.equal(-4)
            });
        });

        describe('Div', () => {
            it('should return 2 when `div(4,2)`', () => {
                expect(div(4, 2)).to.equal(2)
            });

            it('should return `it`s not possible divide by zero` if divide by zero`', () => {

                expect(div(4, 0)).to.equal('it`s not possible divide by zero')
            });
        });
    })
})