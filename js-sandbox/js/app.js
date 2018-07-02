// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);


// let lis = document.getElementsByTagName('li');
// console.log(lis[0]);

// lis = Array.from(lis);
// lis.reverse();

// lis.forEach(function(li, index){
//     console.log(li.className);
//     li.textContent = `${index}: Hello`
// })

// console.log(lis);


// const itemsAll = document.querySelectorAll('ul.collection li.collection-item');

// itemsAll.forEach(function(item, index){
//     item.textContent = `${index}: Hello 2`;
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// for(let o = 0; o < liOdd.length; o++){
//     liOdd[o].setAttribute("style", "font-size: 18px; font-style: italic;");
// }

// for(let i = 0; i < liEven.length; i++) {
//     liEven[i].style.background = '#eee';
// }

// console.log(itemsAll);


// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');


// list.children[3].children[0].id = 'test-link';

// val = list.children[3].children[0];

// val = list.firstChild;
// val = list.firstElementChild;

// Count child elements
// val = list.childElementCount;

// Get parent node
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// Get next sibling
// val = listItem.nextElementSibling;

// Get previous sibling
// val = listItem.previousElementSibling;

// Create element
// const li = document.createElement('li');

// Add class
// li.className = 'collection-item';
// li.id = 'new-item';
// li.setAttribute('title', 'New item');

// Create text node and append
// li.appendChild(document.createTextNode('Hello world'));

// const link = document.createElement('a');
// link.className = 'delete-item secondary-content'
// link.innerHTML = '<i class="fa fa-remove"></i>';

// li.appendChild(link);

// Append li as child to ul
// document.querySelector('ul.collection').appendChild(li);

// console.log(li);



// const newHeading = document.createElement('h2');
// newHeading.id = "task-title";
// newHeading.appendChild(document.createTextNode('New Heading'));

// const oldHeading = document.getElementById('task-title');
// const cardAction = document.getElementById('task-title').parentElement;

// cardAction.replaceChild(newHeading, oldHeading);

// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// lis[0].remove();

// list.removeChild(lis[3]);

// const firstLi = list.firstElementChild;
// const link = firstLi.children[0];

// let val;

// val = link.className;
// val = link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');
// val = link;

// val = link.getAttribute('href');
// val = link.setAttribute('href', 'http://google.com');
// link.setAttribute('title', 'Google');
// val = link.hasAttribute('title');


// console.log(link);
// console.log(val);

// <a class="clear-tasks btn black" href="">Clear Tasks</a>

// document.querySelector('a.clear-tasks').addEventListener('click', function(e){
//     console.log('Clicked');
//     e.preventDefault();
// });

// document.querySelector('a.clear-tasks').addEventListener('click', onClick);

// function onClick(e){
//     let val = e;
//     e.preventDefault();

//     val = e.target;
//     val = e.target.id;
//     val = e.target.className;
//     val = e.target.classList;

//     e.target.innerText = 'Hello there';

//     val = e.type;
//     val = e.timeStamp;
//     val = e.clientY;

//     console.log(val);
// }

// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// clearBtn.addEventListener('click', runEvent);
// clearBtn.addEventListener('dblclick', runEvent);

// card.addEventListener('mousemove', runEvent);

// function runEvent(e) {
//     e.preventDefault();
//     heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
//     document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${e.clientX})`;
// }


// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// const heading = document.querySelector('h5');
// form.addEventListener('submit', runEvent);

// // Clear input
// taskInput.value = '';

// taskInput.addEventListener('keydown', runEvent);

// function runEvent(e) {
//     console.log(`Event type: ${e.type}`);
    // console.log(e.target.value);
    // heading.innerText = e.target.value;
    // console.log(taskInput.value);
    // e.preventDefault();
// }

// Event bubbling

// document.querySelector('.card-title').addEventListener('click', func1);
// document.querySelector('.card-content').addEventListener('click', func2);
// document.querySelector('.card').addEventListener('click', func3);
// document.querySelector('.col').addEventListener('click', func4);

// function func1() {
//     console.log('Card title');
// }
// function func2() {
//     console.log('Card content');
// }
// function func3() {
//     console.log('Card');
// }
// function func4() {
//     console.log('Col');
// }

// Event delegation
// document.querySelector('ul').addEventListener('click', deleteItem);

// function deleteItem(e) {
//     // if(e.target.parentElement.className === 'delete-item secondary-content') {
//     //     console.log('delete item');
//     // }
//     if(e.target.parentElement.classList.contains('delete-item')){
//         console.log('delete item');
//         e.target.parentElement.parentElement.remove();
//     }
// }


// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// localStorage.clear();
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');
// console.log(name, age);

document.querySelector('form').addEventListener('submit',
    function(e) {
        const task = document.getElementById('task').value;

        let tasks;

        if(localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }

        tasks.push(task);

        localStorage.setItem('tasks', JSON.stringify(tasks));
        alert('Task saved');
        e.preventDefault();
    }
);

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
    console.log(task);
})