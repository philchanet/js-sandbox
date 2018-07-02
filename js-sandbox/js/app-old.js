const name = 'Steve';
const age = 66;


if(age > 0 && age < 12) {
    console.log(`${name} is a child`);   
} else if(age >= 13 && age <= 19) {
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}

if(age < 16 || age > 65){
    console.log(`${name} cannot run in race`)
} else {
    console.log(`${name} is registered for the race`)
}

const id = 99;
console.log(id === 100 ? 'Correct' : 'Incorrect');

const color = 'yellow';

switch(color) {
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is not red or blue');
        break;
}

let day = new Date().getDay();
switch(day) {
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    }
    console.log(`Today is ${day}`);


// Function declaration with default values
function greet(firstName = 'John', lastName = 'Doe') {
    return 'Hello ' + firstName + ' ' + lastName;
}
console.log(greet('Steve', 'Smith'));

// Function expressions
const square = function(x = 2) {
    return x * x;
};
console.log(square(8));

// Immediately invocable function expressions - IIFEs
(function(name) {
    console.log(`Hello ${name}`);
})('Bob');

// Property methods
const todo = {
    add: function() {
        console.log('Add todo...')
    },
    edit: function(id) {
        console.log(`Edit todo ${id}`)
    }
}

todo.delete = function() {
    console.log('Delete todo...')
}

todo.add();
todo.edit(22);
todo.delete();



for(let i = 0; i < 10; i++) {
    if(i === 2) {
        console.log(`The value of i is ${i}`);
        continue;
    };
    
    if(i === 5) {
        console.log(`The value of i is ${i}`);
        break;
    }

    console.log(i);
}

let i = 0;
while(i < 10) {
    console.log(`Number ${i}`);
    i++;
}

let x = 1;
do {
    console.log
    console.log(`Number ${x}`);
    i++;
}
while(i < 10);

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
for(let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

cars.forEach(function(car, index, array){
    console.log(`${index} : ${car}`);
    console.log(array);
});

const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Sara'},
    {id: 3, name: 'Karen'}
]

const ids = users.map(function(user) {
    return user.id;
});
console.log(ids);

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}

for(let z in user) {
    console.log(`${z} : ${user[z]}`);
}



let size;

size = {height: window.innerHeight, width: window.innerWidth};
console.log(size.height);