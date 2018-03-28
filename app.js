function greet(person) {
    console.log('Hello, ' + person.firstName);
}
function changeName(person) {
    person.firstName = 'ann';
}
var person = {
    firstName: "Nikita",
    age: 22,
    hobbies: ['cooking', 'sport']
};
greet(person); // не проверяем все параметры в объекте!!!
greet({ firstName: 'name', age: 22 }); // проверяем все параметры и полное соответсвие !!!
changeName(person);
greet(person);
