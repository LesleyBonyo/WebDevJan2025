//access elements
const task = document.getElementById('task');
const addTaskButton = document.getElementById('addTask');
const todoList = document.getElementById('todolist');

function addTask(){
	//pick value the user enters
	const taskValue = task.value;
	//create list item html element
	const todoItem = document.createElement('li');
	todoItem.textContent = taskValue;
	//add the item to the list
	todoList.appendChild(todoItem);

	//check off tasks from todo list
	todoItem.addEventListener('click', function(){
		//todoItem.remove();
		todoItem.style.textDecoration = 'line-through';
		todoItem.style.backgroundColor = 'black';
		todoItem.style.color = "white";
	})

}
addTaskButton.addEventListener('click', addTask);