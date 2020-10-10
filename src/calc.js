


// eslint-disable-next-line no-undef
module.exports = {
    sum: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    },
    mult: function (a, b) {
        return a * b
    },
    div: function (a, b) {
        return (b === 0) ? 'it`s not possible divide by zero' : a / b;
    }
}