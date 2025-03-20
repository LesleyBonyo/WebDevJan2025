<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Register</title>
</head>
<body>
	<h1>Register Student</h1>
	<form method="post">
		<label>Full Name: </label>
		<input type="text" name="fullname" >
		<label>Email: </label>
		<input type="email" name="email">
		<input type="submit" name="submit" value="Register">
	</form>
	<?php
	//create/insert operation
	//connect to database - groupbjan
	include "connectdb.php";

	//check if the user has clicked on submit
	if($_SERVER['REQUEST_METHOD']== 'POST'){
		//pick data user enter
		$fullname = $_POST['fullname'];
		$email = $_POST['email'];
		//write your query
		$sql = "INSERT INTO student(student_name, student_email) VALUES('$fullname','$email')";
		//execute query
		$execute = mysqli_query($connect, $sql);
		//check if successful
		if ($execute) {
			echo "Registered student successfully";
		} else{
			die(mysqli_error($connect));
		}
	}
	?>
</body>
</html>