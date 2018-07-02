// Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('ul.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


loadEventListener();


// Load all event listeners
function loadEventListener(){  
    document.addEventListener('DOMContentLoaded', getTasks);    // DOM load event
    form.addEventListener('submit', addTask);                   // Add task event
    taskList.addEventListener('click', removeTask);             // Remove task event
    clearBtn.addEventListener('click', clearTasks);
    filter.addEventListener('keyup', filterTasks);
};

// Add task
function addTask(e) {
    
    if(taskInput.value === '') {
        alert('Add a task');                                    // Add task event
    }
    
    const li = document.createElement('li');                    // Create li element
    li.className = 'collection-item';                           // Add a class
    li.appendChild(document.createTextNode(taskInput.value));   // Create text node and append to the li
    
    const link = document.createElement('a');                   // Create new link
    link.className = 'delete-item secondary-content';           // Add a class to the link
    link.innerHTML = '<i class="fa fa-remove"></i>';            // Add icon html

    li.appendChild(link);                                       // Append the link to the li
    
    taskList.appendChild(li);                                   // Append li to the ul

    // Store in local storage
    storeTaskInLocalStorage(taskInput.value);

    taskInput.value === '';

    e.preventDefault();
}

function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove task
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();
            // Remove from local storage
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }    
}

function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    })

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearTasks() {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }   
    clearTasksFromLocalStorage();

}

function clearTasksFromLocalStorage() {
    localStorage.clear();
}

function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    
    document.querySelectorAll('.collection-item').forEach(
        function(task) {
            const item = task.firstChild.textContent;
            if (item.toLowerCase().indexOf(text) != -1) {
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
        }
    );
}

function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
        const li = document.createElement('li');                    // Create li element
        li.className = 'collection-item';                           // Add a class
        li.appendChild(document.createTextNode(task));              // Create text node and append to the li

        const link = document.createElement('a');                   // Create new link
        link.className = 'delete-item secondary-content';           // Add a class to the link
        link.innerHTML = '<i class="fa fa-remove"></i>';            // Add icon html

        li.appendChild(link);                                       // Append the link to the li

        taskList.appendChild(li);                                   // Append li to the ul       
    })
}