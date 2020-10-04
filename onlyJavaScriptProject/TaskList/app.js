const form = document.querySelector('#task-form')
const taskList = document.querySelector(".collection")
const clearButton = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

// event listneres
loadEventListeners()

// function for event listeners
function loadEventListeners() {
  // add task event
  form.addEventListener("submit", addTask)
  // remove specific task
  taskList.addEventListener('click', removeTask)
  // remove all task event
  clearButton.addEventListener('click', clearTask)
  // filter task event
   filter.addEventListener('keyup', filterTasks)
  // DOM load event
  document.addEventListener('DOMContentLoaded', getTasks)
}

// get task from local storage
  function getTasks(){
    let tasks
  if(localStorage.getItem('tasks') === null){
    tasks = []
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.forEach(function(task){

    // create list element
    const  li = document.createElement("li")
    li.setAttribute("class", "collection-item")

    //create text node and append the value
    li.appendChild(document.createTextNode(task))


    // append input li to ul
    taskList.appendChild(li)

    // delete task
    const deleteLink  = document.createElement('a')
    deleteLink.setAttribute('class', 'delete-item secondary-content')
    deleteLink.innerHTML = '<i class="fa fa-remove"></i>'

    //append deleteLink to the list
    li.appendChild(deleteLink)
  })
}

// add task
function addTask(e){

  //for null input
  if(taskInput.value == ''){
    alert('Please enter task')
  }
  else{
  // create list element
  const  li = document.createElement("li")
  li.setAttribute("class", "collection-item")

  //create text node and append the value
  li.appendChild(document.createTextNode(taskInput.value))


  // append input li to ul
  taskList.appendChild(li)

  // delete task
  const deleteLink  = document.createElement('a')
  deleteLink.setAttribute('class', 'delete-item secondary-content')
  deleteLink.innerHTML = '<i class="fa fa-remove"></i>'

  //append deleteLink to the list
  li.appendChild(deleteLink)

  // add task to local storage
  addTaskToLocalStorage(taskInput.value)

  //clear input
  taskInput.value = ''

  e.preventDefault()
  }
}


// Store in local storage
function addTaskToLocalStorage(task){
  let tasks
  if(localStorage.getItem('tasks') === null){
    tasks = []
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.push(task)

  localStorage.setItem('tasks', JSON.stringify(tasks))
}

// filter task from list
function filterTasks(e){
  const text = e.target.value.toLowerCase()

  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent
    if(item.toLowerCase().indexOf(text) != -1){
    task.style.display = 'block';
   }
   else {
     task.style.display = 'none'
   }})
}

// remove task
function removeTask(e){

  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are You sure?'))
    e.target.parentElement.parentElement.remove()
  }

  //remove from local storage
 removeTaskFromLocalStorage(e.target.parentElement.parentElement)
}

//remove task from ls
function removeTaskFromLocalStorage(taskList){
  let tasks
  if(localStorage.getItem('tasks') === null){
    tasks = []
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.forEach(function(task, index){
    if(taskList.textContent === task){
      tasks.splice(index, 1)
    }
  })

  localStorage.setItem('tasks', JSON.stringify(tasks))

}

// clear all task
function clearTask(){
  if(confirm('Are you sure?')){
    while(taskList.firstChild){
      taskList.removeChild(taskList.firstChild)
    }
  }

  // clear tasks from local storage
  clearTaskFromLocalStorage()
}

//clear task from ls
function clearTaskFromLocalStorage(){
  localStorage.clear()
}
