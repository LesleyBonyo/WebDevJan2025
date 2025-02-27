//access elements
const task = document.getElementById('task');
const addtaskButton = document.getElementById('addtask');
const todolist = document.getElementById('todolist');

function addTask(){
	//pick value(the user entered) of the input element
	const taskValue = task.value;
	//create list item 
	const li = document.createElement('li');
	li.textContent = taskValue;
	//create a button to remove items from todolist
	const removeButton = document.createElement('button');
	removeButton.textContent = 'X';
	li.appendChild(removeButton)
	//add the list item to the to do list
	todolist.appendChild(li);
	//remover tasks from to do list
	//add event handler to the list item
	removeButton.addEventListener('click', function(){
		//li.remove();
		removeButton.remove();
		//check them off your list
		li.style.textDecoration = 'line-through';
		li.style.color = 'red';
	})
}
//add event handler to the add task button
addtaskButton.addEventListener('click', addTask);
