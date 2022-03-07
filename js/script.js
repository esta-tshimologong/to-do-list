document.addEventListener('DOMContentLoaded', function(){
    let screen = document.querySelector('#output-box');
    //add tasks
    const addTask = document.forms['add-task'];
    addTask.addEventListener('submit', function(e) {
        e.preventDefault();
        const task = addTask.querySelector('input[type="text"').value;

        //create element
        const uList = document.createElement('ul')
        const listTask = document.createElement('li')
        const taskName = document.createElement('span')
        const deleteBtn = document.createElement('button')

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
    })
    //event bubbling
    let taskList = document.querySelector('#output-box ul');
    li.addEventListener('click', function(e) {
        if(e.target.className == 'delete') {
            const listTask = e.target.parentElement;
            taskList.removeChild(listTask);
        }    
    })
    
    //delete button
    let btns = document.querySelectorAll('#output-box .delete');
    Array.from(btns).forEach(function(btn) {
        btn.addEventListener('click', function(e){
            const list = e.target.parentElement;
            list.parentNode.removeChild(list);
        })
    })
 
    //search an item
    let searchTask = document.forms['search-task'];
    searchTask.addEventListener('keyup', function(e) {
        const term = e.target.value.toLowerCase();
        const tasks = taskList.getElementsByTagName('li');
        Array.from(tasks).forEach(function(task) {
            const taskTitle = tasks.firstChildElement.textContent;
            if(taskTitle.toLowerCase().indexOf(term) != -1) {
                book.style.display = 'block';
            }else {
                book.style.display = 'none';
            }
        })
    })

})