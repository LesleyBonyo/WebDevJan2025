//external js
console.log("External js");

// single line comment
/* multiple line 
comment */

// variables, identifiers and data types
let firstName = "Jane"; //string
let age = 15; //number
let height = 5.5; //number
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
	return num1 * num2;
}
let ouProduct = getProduct(5,60);
console.log(ouProduct);