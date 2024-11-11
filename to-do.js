document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput').value.trim();
    const taskDateTime = document.getElementById('taskDateTime').value;
    if (!taskInput) {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    taskItem.classList.add('task');

    const taskText = document.createElement('span');
    taskText.textContent = taskInput;

    const taskDate = document.createElement('span');
    taskDate.textContent = taskDateTime ? `Due: ${new Date(taskDateTime).toLocaleString()}` : '';
    taskDate.classList.add('task-date');

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
        const newTaskText = prompt('Edit your task:', taskText.textContent);
        if (newTaskText) {
            taskText.textContent = newTaskText.trim();
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('task-actions');
    actionsDiv.appendChild(completeButton);
    actionsDiv.appendChild(editButton);
    actionsDiv.appendChild(deleteButton);

    taskItem.appendChild(taskText);
    taskItem.appendChild(taskDate);
    taskItem.appendChild(actionsDiv);

    taskList.appendChild(taskItem);

    // Clear inputs
    document.getElementById('taskInput').value = '';
    document.getElementById('taskDateTime').value = '';
}
