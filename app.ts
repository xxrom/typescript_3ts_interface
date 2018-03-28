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


