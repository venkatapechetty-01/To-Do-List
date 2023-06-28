/* script.js */

// Function to handle task completion
function toggleTaskComplete(taskId) {
    const taskElement = document.getElementById(taskId);
    taskElement.classList.toggle('completed');
  }
  
  // Function to delete a task
  function deleteTask(taskId) {
    const taskElement = document.getElementById(taskId);
    taskElement.remove();
  }
  
  // Function to add a new task
  function addTask() {
    const taskTitleInput = document.getElementById('task-title');
    const taskDescriptionInput = document.getElementById('task-description');
  
    const taskTitle = taskTitleInput.value;
    const taskDescription = taskDescriptionInput.value;
  
    if (taskTitle.trim() === '') {
      alert('Please enter a task title.');
      return;
    }
  
    const taskId = 'task-' + Date.now();
  
    const taskElement = document.createElement('li');
    taskElement.setAttribute('id', taskId);
    taskElement.classList.add('task');
  
    const titleElement = document.createElement('div');
    titleElement.classList.add('title');
    titleElement.textContent = taskTitle;
  
    const descriptionElement = document.createElement('div');
    descriptionElement.classList.add('description');
    descriptionElement.textContent = taskDescription;
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
      deleteTask(taskId);
    });
  
    taskElement.appendChild(titleElement);
    taskElement.appendChild(descriptionElement);
    taskElement.appendChild(deleteButton);
  
    const taskList = document.getElementById('task-list');
    taskList.appendChild(taskElement);
  
    // Clear input fields
    taskTitleInput.value = '';
    taskDescriptionInput.value = '';
  }
  
  // Event listener for task completion
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('task')) {
      const taskId = event.target.getAttribute('id');
      toggleTaskComplete(taskId);
    }
  });
  
  // Event listener for task form submission
  const taskForm = document.getElementById('task-form');
  taskForm.addEventListener('submit', function (event) {
    event.preventDefault();
    addTask();
  });
  