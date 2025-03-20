<?php 
	// single-line comment
	# single-line comment
	/* multi-line 
	comment */
	echo "Hello world";
	//variables, identifiers and data types
	//valid variable names
	$first_name = "Jane";
	$_firstname = "Joy";
	//$1name = 5; //not valid
	$age = 7;
	$height = 5.5;
	$haveRegistered = true;
	$marks = NULL;
	//reassign a different value to $first_name
	$first_name = "John";
	//check data types - var_dump()
	echo "<br>";
	echo var_dump($first_name);
	echo "<br>";
	echo var_dump($age);
	echo "<br>";
	echo var_dump($height);
	echo "<br>";
	echo var_dump($haveRegistered);
	echo "<br>";
	echo var_dump($marks);
	//arrays
	//indexed arrays
	$student_marks = [45, 34, 67, 21];
	$student_height = array(5.5,6.2, 4.3);

	echo "<h1>student 3 : $student_marks[2]</h1>";
	echo 'height of student 2: '.$student_height[1];
	//associative arrays - named keys
	$unit_codes = array('web dev' => 111, 'DSA' => 112, 'SE' => 113);
	//access elements of associative arrays
	echo $unit_codes['DSA'];
	//loops - for
	for($j = 1; $j < 6; $j++){
		echo "<br>Statement $j";
	}
	//while loop
	$i = 0;
	while($i < 4){
		echo "<br>More sentence $i";
		$i = $i + 2;
	}
	//foreach - loop through an array
	echo "<select>";
	foreach($student_height as $height){
		echo "<option>Height: $height</option>";
	}
	echo "</select>";
	//loop through associative arrays
	foreach($unit_codes as $unit => $code){
		echo "<br> $unit has this code $code";
	}
	//if statements
	$age = 16;
	if ($age < 18) {
		echo "<br>Cannot vote";
	} elseif($age>18){
		echo "<br>Can vote";
	} else{
		echo "<br>You can finally vote";
	}
	//switch
	$day = 2;
	switch ($day){
		case 1:
			echo "Monday";
			break;
		case 2:
			echo " Tuesday";
			break;
		default:
			echo "Not Monday or Tuesday";
	}
	//functions
	function hello(){
		echo "<h1>Hello function</h1>";
	}
	//call a function
	hello();
	//function with parameters
	function helloUser($user){
		echo "Hello $user";
	}
	helloUser("Jane Doel");
	//function with return statement
	function getSum($num1, $num2){
		return $num1 + $num2;
	}
	echo getSum(20, 40);
	//constant variables
	define('PI', 3.14);
	echo "<br>PI day ".PI;
	//isset() function
	$example = "fy";
	if (isset($example)) {
		// code...
		echo "<br>Executed only if the variable is declared and not null";
	}
	echo date("d/m/y");
?>