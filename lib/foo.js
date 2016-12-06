module.exports = {
    bar: function (f) {
        console.log('bar');
        f && f();
    }
};