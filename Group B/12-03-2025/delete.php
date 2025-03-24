<?php
	//delete operation
	//connect to db
	include "connectdb.php";
	//pick deletid from url
	$deleteid = $_GET['deleteid'];
	//write query
	$query = "DELETE FROM student WHERE student_id= $deleteid";
	//execute query
	$execute = mysqli_query($connect, $query);
	//check if successful
	if ($execute) {
		//redirect to display page
		header("Location:display.php");
	} else{
		die(mysqli_error($connect));
	}



?>