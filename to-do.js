let input = document.querySelector('#taskInput');
let dInput = document.querySelector('#deadInput');
let taskBox = document.querySelector('.taskBox');
let pop = document.querySelector('.pop');
let tasks = [];
let tasksTime = [];
let addBtn = document.querySelector('#add');
let mood = 'create';
let tmp;

window.onload = setTimeout(function (){
   pop.style.display = 'block';   
},1500)
 
window.addEventListener('click' , ok)
function ok(){
    pop.style.display = 'none'; 
}

if (localStorage.getItem('task')) {
    tasks = JSON.parse(localStorage.getItem('task'))
}
if (localStorage.getItem('taskTime')) {
    tasksTime = JSON.parse(localStorage.getItem('taskTime'))
}

show();

function add() {
    if (mood == 'create') {
        if (input.value != '' && dInput.value != '') {
            if(input.value.toLowerCase().includes('tawasol') || input.value.toLowerCase().includes('توسل')){
                tasks.push('I LOVE YOU 💜');
                tasksTime.push(520);
            }else{
                tasks.push(input.value);
                tasksTime.push(dInput.value);
            }
            localStorage.setItem('task', JSON.stringify(tasks));
            localStorage.setItem('taskTime', JSON.stringify(tasksTime));
            input.value = '';
            dInput.value = '';
            show();
        } else {
            input.value == '' ? input.focus() : dInput.focus();
        }
    } else {
        if (input.value != '' && dInput.value != '') {
            if(input.value.toLowerCase().includes('tawasol') || input.value.toLowerCase().includes('توسل')){
               tasks[tmp] = 'I LOVE YOU 💜';
            tasksTime[tmp] = 520;
            }else{
               tasks[tmp] = input.value;
            tasksTime[tmp] = dInput.value;
            }            
            localStorage.setItem('task', JSON.stringify(tasks));
            localStorage.setItem('taskTime', JSON.stringify(tasksTime));
            input.value = '';
            dInput.value = '';
            mood = 'create';
            addBtn.innerHTML = 'add new task';
            show();
        } else {
            input.value == '' ? input.focus() : dInput.focus();
        }
    }
}

function show() {
    taskBox.innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        taskBox.innerHTML += `<div><p>${tasks[i]}  -  ${tasksTime[i]}</p><div><span onclick='del(this,${i})'><i class="fa fa-times icon"></i></span>
        <span class='u' onclick='update(${i})'><i class="fa fa-pen u-icon"></i></span></div></div> `;
    }
}

function del(item, index) {
    item.parentElement.remove();
    tasks.splice(index, 1)
    tasksTime.splice(index, 1)
    localStorage.setItem('task', JSON.stringify(tasks));
    localStorage.setItem('taskTime', JSON.stringify(tasksTime));
    show();
}

function delAll() {
    tasks = [];
    tasksTime = [];
    localStorage.setItem('task', JSON.stringify(tasks));
    localStorage.setItem('taskTime', JSON.stringify(tasksTime));
    show();
}

function update( index) {
    input.value = tasks[index];
    dInput.value = tasksTime[index];
    addBtn.innerHTML = 'update task';
    mood = 'update';
    tmp = index;
}