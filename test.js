var foo = require('./lib/foo');
var bar = require('./bar');

foo.bar(function () {
    console.log('here');
});

bar.baz(function () {
    console.log('here');
});
