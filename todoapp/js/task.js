const $ = document.querySelector.bind(document);
const btnAddTask = $('button');
const taskNameEle = $('#content')
const result = $('#result')

let tasks = getTaskFromLocalStorage()
renderTasks(tasks)

btnAddTask.addEventListener('click', function () {
  if (!taskNameEle.value) {
    alert('Please enter task name')
    return false
  }

  let taskId = this.getAttribute('id')
  let tasks = getTaskFromLocalStorage()
  let task = { name: taskNameEle.value }
  if (taskId) {
    tasks[taskId] = task
    this.removeAttribute('id')
  } else {
    tasks.push(task)
  }
  taskNameEle.value = ''
  localStorage.setItem('tasks', JSON.stringify(tasks))
  renderTasks(tasks)
})

function editTask(id) {
  console.log(id)
  let tasks = getTaskFromLocalStorage()
  // if (tasks.length > 0) {
  //   console.log(tasks)
  //   taskNameEle.value = tasks[id].name
  // }
}

function renderTasks(tasks = []) {
  let content = '<ul>'

  tasks.forEach((task, index) => {
    content += `<li>
      <div clas="task-name">${task.name}</div>
      <a href="#" onclick="editTask(${index})">Edit</a>
      <a href="#" onclick="deleteTask(${index})">Delete</a>
    </li>`
  })

  content += '</ul>'
  result.innerHTML = content
}

function getTaskFromLocalStorage() {
  return localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []
}

function deleteTask(id) {
  console.log(id)
  if (confirm('are you really want to delete?')) {
    let tasks = getTaskFromLocalStorage()
    tasks.splice(id, 1)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    renderTasks(getTaskFromLocalStorage())
  }
}

function editTask(id) {
  let tasks = getTaskFromLocalStorage()
  if (tasks.length > 0) {
    taskNameEle.value = tasks[id].name
    btnAddTask.setAttribute('id', id)
  }
}



