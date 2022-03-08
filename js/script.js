let screen = document.querySelector('#output-box');
const addTask = document.forms['add-task'];//add tasks
const uList = document.createElement('ul')//create unordered list
const clearTask = document.querySelector('add');

addTask.addEventListener('submit', function(e) {
    e.preventDefault();
    const task = addTask.querySelector('input[type="text"').value;

    if(task != "") {
        //create element
        const listTask = document.createElement('li')
        const taskName = document.createElement('span')
        var deleteBtn = document.createElement('button')

        //add content
        taskName.textContent = task;
        deleteBtn.textContent = 'Delete';

        //adding class lists
        deleteBtn.classList.add('delete');

        //append child
        listTask.appendChild(taskName);
        listTask.appendChild(deleteBtn);
        uList.appendChild(listTask);
        screen.appendChild(uList);
    }   
})

//event bubbling //delete button
const taskList = document.querySelector('#output-box ul');
taskList.addEventListener('click', function(e) {
    if(e.target.className == 'delete') {
        const listTask = e.target.parentElement;
        taskList.removeChild(listTask);
    }    
})

//search an item
const searchTask = document.forms['search-task'].querySelector('input');
searchTask.addEventListener('keyup', function(e) {
    const term = e.target.value.toLowerCase();
    const tasks = taskList.getElementsByTagName('li');
    Array.from(tasks).forEach(function(task) {
        const taskTitle = task.firstChildElement.textContent;
        if(taskTitle.toLowerCase().indexOf(term) != -1) {
            book.style.display = 'block';
        }else {
            book.style.display = 'none';
        }
    })
})