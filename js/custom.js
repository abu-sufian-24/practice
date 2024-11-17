// ans:1

let name = 'John';
let age = 25;
console.log(`My name is ${name} and I am ${age} years old`);

// ans:2
let num = 5;
if (num % 2 === 0) {
  console.log('The number is even.');
} else {
  console.log('The number is odd.');
}

let num1 = 6;
if (num1 % 2 === 0) {
  console.log('The number is even.');
} else {
  console.log('The number is odd.');
}

// ans:3
for (let index = 1; index <= 5; index++) {
  console.log(index);
}

// ans:4
function addNumbers(a, b) {
  return a + b;
}

let result = addNumbers(3, 7);
console.log(result);

// ans:5
let fruits = ['apple', 'banana', 'cherry'];
fruits.push('Orange');
console.log(fruits[0], fruits.length);

// ans:6
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(number => {
  console.log(number * 2);
});

// ans:7
document.getElementById('changeText').addEventListener('click', function () {
  document.querySelector('h1').textContent = 'You clicked the button!';
});

// ans:8
let text = 'hello world';
console.log(text.toUpperCase());

// ans:9

let person = {
  name: 'Alice',
  age: 30,
  greet: function () {
    return 'Hello, my name is Alice.';
  },
};

console.log(person.greet());
