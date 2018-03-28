"use strict";
// Simple Generic
function echo(data) {
    return data;
} // get anything inside =)
console.log(echo("niktia").length);
console.log(echo(27));
console.log(echo({ name: 'Nikita', age: 22 }));
// Better Generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho("niktia").length);
// console.log(betterEcho(27).length); // cant use length
console.log(betterEcho({ name: 'Nikita', age: 22 }));
// Built-in Generics
var testResults = [1.88, 2.33];
testResults.push(-2.22);
// testResults.push('string'); // error, should be number
console.log(testResults);
// Arrays
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(['string', 'apple']);
// Generic Types
var echo2 = echo;
console.log(echo2('Something'));
// Generic Class
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = true;
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
