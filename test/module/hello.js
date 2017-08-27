/**
 * module
 */
// exports.world1 = function() {
//     console.log('world1');
// };

function Hello() {
    var name;

    this.setName = function (thyName) {
        name = thyName;
    };

    this.sayHello = function () {
        console.log('Hello ' + name);
    };
};

module.exports = Hello;
