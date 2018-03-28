// Simple Generic
function echo(data: any) {
  return data;
}// get anything inside =)

console.log(echo("niktia").length);
console.log(echo(27));
console.log(echo({ name: 'Nikita', age: 22 }));

// Better Generic
function betterEcho<T>(data: T) {
  return data;
}

console.log(betterEcho("niktia").length);
// console.log(betterEcho(27).length); // cant use length, because this is number
console.log(betterEcho({ name: 'Nikita', age: 22 }));

// Built-in Generics
const testResults: Array<number> = [1.88, 2.33];
testResults.push(-2.22);
// testResults.push('string'); // error, should be number
console.log(testResults);

// Arrays
function printAll<T>(args: T[]) {
  args.forEach((element) => console.log(element));
}
printAll<string>(['string', 'apple']);


// Generic Types
const echo2: <T>(data: T) => T = echo;

console.log(echo2<string>('Something'));

// Generic Class
// можно указывать определенные класы к определенным переменным
class SimpleMath<T extends number | boolean, U extends number | string> {
  baseValue: T; // эта ошибка инициализации появилась только с 2.7 ts
  multiplyValue: U;
  calculate(): number {
    return +this.baseValue * +this.multiplyValue;
  }
}

const simpleMath = new SimpleMath<boolean, number>();
simpleMath.baseValue = true;
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());