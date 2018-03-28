interface NamedPerson {
  firstName: string;
  age?: number; // option argument
  [propName: string]: any; // еще добавляем одну переменную, любую и не обязательную
  greet(lastName: string): void; // метод объявляем
}

function greet(person: NamedPerson) {
  console.log('Hello, ' + person.firstName);
}

function changeName(person: NamedPerson) {
  person.firstName = 'annA';
}

const person = {
  firstName: "Nikita",
  age: 22,
  hobbies: ['cooking', 'sport'],
  greet(lastName: string) {
    console.log('Hi ' + this.firstName + ' => ' + lastName);
  }
}

// greet(person); // не проверяем все параметры в объекте!!!
// greet({ firstName: 'name', age: 22 }); // проверяем все параметры и полное соответсвие !!!

changeName(person);
greet(person);
person.greet('Kaka');


class Person implements NamedPerson {
  firstName: string;
  lastName: string;
  greet(lastName: string) {
    console.log('Hi ' + this.firstName + ' => ' + lastName);
  }
  // constructor() { // убирает ошибку при инициализации firstName: string;
  //   this.firstName = 'hello';
  // }
}

const myPerson = new Person();
console.log(myPerson);
myPerson.firstName = 'Nika';

greet(myPerson);
myPerson.greet(' ttt ');

// Function Types

interface DoubleValueFunc {
  (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function(value1: number, value2: number) {
  return (value1 + value2) * 2;
}

console.log(myDoubleFunction(10, 20));