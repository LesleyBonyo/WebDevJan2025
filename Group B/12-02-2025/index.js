console.log("External JS");

// single line comment
/* multiple line 
comment */

// variables, identifiers and data types
//declaring variables
let firstName = "John Jack"; //string use '' or ""
let secondName; //undefined
let age = 15; //number - global scope
let height = 20.5; //number
let isRegistered = false; //boolean
let marks = null; //null

//check the data types - typeof 
console.log(typeof firstName);

//arrays
const agesOfStudents = [12, 30, 40];
//access array elements - use index
console.log("Student one is " + agesOfStudents[0]);

//objects - have properties and methods
let studentDetails = {
	//properties - key:value pairs
	studentName: "Joy Mercy",
	studentAge: 12,
	//methods - a function inside an object
	aboutStudent: function(){
		//this - refers to the object
		console.log(this.studentName + 
			" is " + this.studentAge + " years old.");
	}
}
//access object properties - object.property
console.log(studentDetails.studentName);
//access object methods - object.method()
studentDetails.aboutStudent();

//functions - block of code that performs a specific task
function hello(){
	console.log("Hello function");
}
//call a function
hello();
// function with parameters
function helloStudent(studentName){
	console.log("Hello " + studentName );
}
helloStudent("Clara Joy");
function getProduct(num1, num2){
	let example = "Local scope";
	return num1 * num2; //signifies the end of execution of a function
}
//access variable with local scope
//console.log(example); //give an error

let ourProduct = getProduct(20, 4);
console.log(ourProduct);

//function as an expression
let exampleFunction = function(){
	console.log("Function as an expression");
}
exampleFunction();

//block scope
{
	let myMarks = 50; // block scope
	var yourMarks = 60;
}
//console.log(myMarks); //give an error
//console.log(yourMarks);
//var
var yourVariable = true;
var yourVariable = 15;

//let 
let someVariable = "Home";
//let someVariable = 34; //give an error
someVariable = 50;

//const
const pi = 3.14;

//loops - for
for(let i = 1; i < 4; i++){
	console.log("Iteration " + i);
}
//while loop
let j = 0;
while(j <= 4){
	console.log("Sentence " + j);
	j = j + 1;
}
//if..else
let voting = 20;
if (voting<18) {
	console.log("Not allowed");
} else if (voting>18) {
	console.log("Allowed");
}
else{
	console.log("Finally you can vote");
}
//switch..case
let dayOfWeek = 2;
switch(dayOfWeek){
case 1:
	console.log("Monday");
	break;
case 2: 
	console.log("Tuesday");
	break;
default:
	console.log("Between Tue and Mon");
}
//DOM
//access html elements
//by Id - getElementById()
const par1 = document.getElementById("par1");
console.log(par1);

//by class - getElementsByClassName()
const ourClass = 
		document.getElementsByClassName("class1");//array
console.log(ourClass[1]);

//by tag - getElementsByTagName()
const paragraphs = document.getElementsByTagName("p");//array

//using css selectors
const heading = document.querySelector('.class1');
console.log(heading);

//remove/delete elements
heading.remove();

//create elements
let newHeading = document.createElement('h1');
//add some text to the heading
newHeading.textContent = "This is a new heading";
//pick the div on the page
const newdiv = document.getElementById('newdiv');
//add created heading to the div
newdiv.appendChild(newHeading);

//properties - used to get or change value of elements

//innerHTML -get or change the content of elements
par1.innerHTML = "<u>I have been changed</u>";

newHeading.innerHTML = par1.innerHTML;

//textContent - get or change the text content of elements
ourClass[0].textContent = "A new link";

//get or changing attributes of elements - element.nameofattribute
ourClass[0].href = "https://strathmore.edu/";
ourClass[0].target = "_blank";
ourClass[0].title = "To strathmore site";

const myimg = document.getElementById('myimg');
myimg.src = "https://www.thespruce.com/thmb/JamFYX_T51P1oMAUZhOdd41GWQ4=/5128x3415/filters:no_upscale():max_bytes(150000):strip_icc()/livestock---sideview-of-a-boer-goat-kid-on-a-green-pasture---dodd-city--texas--usa--530704190-5c3fe72246e0fb00010eb949.jpg";

//get or change css style - element.style.cssproperty
myimg.style.width = "50%";
myimg.style.borderRadius = "50px";
newHeading.style.border = "1px solid red";

//get value of form elements - value
function findProduct(){
	const num1 = document.getElementById('num1').value;
	const num2 = document.getElementById('num2').value;
	let ourProduct = num1 * num2;
	const result = document.getElementById('result');
	result.textContent = ourProduct;
	result.style.color = "red";
	return;
}
//events
const productButton = 
	document.getElementById("productButton");
/*productButton.onclick = function(){
	const num1 = document.getElementById('num1').value;
	const num2 = document.getElementById('num2').value;
	let ourProduct = num1 * num2;
	const result = document.getElementById('result');
	result.textContent = ourProduct;
	result.style.color = "red";
	return;
};*/
//addEventListener(event, function)
productButton.addEventListener("click",findProduct);
productButton.addEventListener("click",function(){
	alert("Finding product");
})
//mouse events - mouseover, mouseout
productButton.addEventListener("mouseover", function(){
	productButton.style.color = "white";
	productButton.style.backgroundColor = "Blue";
	productButton.style.border = "none";
});
//mouseout
productButton.addEventListener("mouseout", function(){
	productButton.style.color = "white";
	productButton.style.backgroundColor = "red";
	productButton.style.border = "none";
});