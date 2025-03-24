<?php
	//delete operation
	include "connectdb.php";
	//pick student id from the url
	$deleteid = $_GET['deleteid'];
	//write query
	$query = "DELETE FROM student WHERE id=$deleteid";
	//execute query
	$execute = mysqli_query($connect, $query);
	//check if successful
	if ($execute) {
		header("Location: display.php");
	} else{
		die(mysqli_error($connect));
	}


?>