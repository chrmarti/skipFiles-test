module.exports = {
    baz: function (f) {
        console.log('baz');
        f && f();
    }
};