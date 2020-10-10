
describe('Main', function () {

    // roda uma vez antes do bloco
    before(function () {
        console.log('before')
    })

    // roda uma vez depois do bloco
    after(function () {
        console.log('after')
    })

    // roda todas as vezes, antes de cada bloco
    beforeEach(function () {
        console.log('beforeEach')
    })

    afterEach(function () {
        console.log('afterEach')
    })


    describe('metod A', function () {
        context.skip("case 1", function () {
            it('should OK', function () {
                throw new Error('Error metod A, case 1')
            })
        })

        context("case 2", function () {
            it('test1', function () {

            })
        })
    })
    describe('metod B', function () {
        context("case 1", function () {
            it('should OK', function () {

            })
        })
    })
});