//external js
console.log("External js");

// single line comment
/* multiple line 
comment */

// variables, identifiers and data types
let firstName = "Jane"; //string
let age = 15; //number
let height = 5.5; //number - global scope
let haveRegistered = true; //boolean
let novalue = null; //null
let secondName; //undefined

age = 40;
//check data type of a variable
console.log(typeof firstName)
//array
const heightOfStudents = [12.5, 20.5, 5, 6];
console.log(typeof heightOfStudents);
//access array elements- index
console.log("Second element is "+ heightOfStudents[1])

//objects - have properties and methods
let student = {
	//properties - key:value pairs
	studentName: "Martha Kim",
	studentNumber: 123,
	isRegistred: false,
	//methods - function defined in an object
	studentDetails: function(){
		console.log(this.studentName + 
			" is student number " + this.studentNumber);
	}

} 
//how to access object properties: objectname.property
console.log(student.studentName);
//how to access object methods: ojectname.method()
student.studentDetails();
student.studentDetails();

 //functions - block of code that performs a certain task
function hello(){
	console.log("Hello function");
}
//calling a function
hello();
//function with parameters
function helloUser(fullName){
	console.log("Hello "+ fullName);
}
helloUser("Janet Addy");
//return statement
function getProduct(num1, num2){
	let num3 = 10; //local scope
	return num1 * num2; // signify end of execution of a function
}
//console.log(num3); // error

let ouProduct = getProduct(5,60);
console.log(ouProduct);

// function as an expression
let helloWorld = function(){
	console.log("Hello World");
}
helloWorld();

//block scope
{
	const pi = 3.14; //block scope
	var myName = "Joy";
}
//console.log(pi); //error
console.log(myName);

//Var
var example = 13;
var example = 'Jan';

//let
let secondExample = 13;
//let secondExample = 'Jan'; //error

//const
const radius = 7;
//radius = 10; //error

secondExample = 45;
//loops - for
for(let i = 1; i < 5; i++){
	console.log("Sentence " + i);
}
//while loop
let j = 0;
while(j <= 4){
	console.log( "Text " + j);
	j = j + 1;
}
//if..else
let myAge = 14;
if (myAge<18) {
	console.log("Not allowed");
}
else if (myAge>18) {
	console.log("Allowed");
} else{
	console.log("Perfect");
}
//switch..case
let day = 3;
switch(day){
case 1:
	console.log("Monday");
	break;
case 2:
	console.log("Tuesday");
	break;
case 3:
	console.log("Wednesday");
	break;
default:
	console.log("Between Wed and Mon");
}

//DOM - methods
//access html elements
//by Id - getElementById()
const firstParagraph = document.getElementById("par1");
console.log(firstParagraph);

//by class - getElementsByClassName()
const myClass = document.getElementsByClassName("myclass"); //array
console.log(myClass[0]);

//by Tag - getElementsByTagName()
const paragraphs = document.getElementsByTagName("p");

//get elements by css selectors
const heading = document.querySelector('.myclass');
console.log(heading);

//removing elements on the page - element.remove()
heading.remove();

//create elements on the page - document.createElement()
let mydiv = document.getElementById("mydiv");
const anotherhead = document.createElement('h2');
anotherhead.textContent = "Tumaini High School";
mydiv.appendChild(anotherhead);

//properties
//innerHTML - get or set content of a HTML element
firstParagraph.innerHTML = "<b>We have changed this paragraph</b>";

//textContent - get or set the text of a HTML element
firstParagraph.textContent = "Make me bold";

//get or set html attributes - element.attribute
const myimg = document.getElementById('myimg');
myimg.src = "https://th.bing.com/th/id/R.2b8e763cac892f3600a9c39e8c080798?rik=KE6r1yWXNeqmzw&pid=ImgRaw&r=0";

//get or set css styles - element.style.cssproperty
myimg.style.width = "50%";
myimg.style.borderRadius = "50px";
firstParagraph.style.textDecoration = "underline";
anotherhead.style.border = "1px solid red";

//get the value of an input element
function findProduct(){
	const number1 = document.getElementById('num1');
	const number2 = document.getElementById('num2');
	//get value
	//number1.value
	let prod = number1.value * number2.value;
	document.getElementById('result').textContent = prod;
	return;
}

function alertMe(){
	alert("You have been alerted"); // gives an alert box
}
//events
//add event as property
const prodButton = document.getElementById("prodButton");
//prodButton.click = findProduct();
prodButton.onclick = alertMe();

//add event listener
//mouse event - onmouseover, onmouseout
prodButton.addEventListener("mouseover", function(){
	prodButton.style.backgroundColor = "Black";
	prodButton.style.color = "white";
});
//create a function
function mouseFunc(){
	prodButton.style.backgroundColor = "white";
	prodButton.style.color = "black";
}
prodButton.addEventListener("mouseout", mouseFunc);
prodButton.addEventListener("click", findProduct);
prodButton.addEventListener("click", alertMe);