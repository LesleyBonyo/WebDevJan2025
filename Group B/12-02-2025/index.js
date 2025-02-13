console.log("External JS");

// single line comment
/* multiple line 
comment */

// variables, identifiers and data types
//declaring variables
let firstName = "John Jack"; //string use '' or ""
let secondName; //undefined
let age = 15; //number
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
	console.log("Hello " + studentName);
}
helloStudent("Clara Joy");
function getProduct(num1, num2){
	return num1 * num2; //signifies the end of execution of a function
}
let ourProduct = getProduct(20, 4);
console.log(ourProduct)