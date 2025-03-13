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




?>