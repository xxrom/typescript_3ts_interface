interface NamedPerson {
  firstName: string;
  age?: number; // option argument
  [propName: string]: any; // еще добавляем одну переменную, любую и не обязательную
}

function greet(person: NamedPerson) {
  console.log('Hello, ' + person.firstName);
}

function changeName(person: NamedPerson) {
  person.firstName = 'ann';
}

const person = {
  firstName: "Nikita",
  age: 22,
  hobbies: ['cooking', 'sport']
}

greet(person); // не проверяем все параметры в объекте!!!
greet({ firstName: 'name', age: 22 }); // проверяем все параметры и полное соответсвие !!!
changeName(person);
greet(person);