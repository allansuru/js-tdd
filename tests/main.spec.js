describe('Main', function () {
    describe('metod A', function () {
        context.skip("case 1", function () {
            it('should OK', function () {
                throw new Error('Error metod A, case 1')
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