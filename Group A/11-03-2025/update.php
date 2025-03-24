<?php
	//connect to db
	include "connectdb.php";
	$updateid = $_GET['updateid'];
	$query = "SELECT * FROM student WHERE id=$updateid";
	$execute = mysqli_query($connect, $query);
	if ($execute) {
		$row = mysqli_fetch_assoc($execute);
		$student_name = $row['student_name'];
		$student_email = $row['student_email'];
	} else{
		die(mysqli_error($connect));
	}
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Update</title>
</head>
<body>
	<h1>Update Student</h1>
	<form method="post">
		<label>Full Name: </label>
		<input type="text" name="fullname" value="<?php echo $student_name; ?>">
		<label>Email: </label>
		<input type="email" name="email" value="<?php echo $student_email; ?>">
		<input type="submit" name="submit" value="Update">
	</form>
	<?php
	//create/insert operation
	//connect to database - groupbjan
	include "connectdb.php";
	//pick update id on url
	$updateid = $_GET['updateid'];

	//check if the user has clicked on submit
	if($_SERVER['REQUEST_METHOD']== 'POST'){
		//pick data user enter
		$fullname = $_POST['fullname'];
		$email = $_POST['email'];
		//write your query
		$sql = "UPDATE student SET student_name='$fullname', student_email='$email' WHERE id=$updateid";
		//execute query
		$execute = mysqli_query($connect, $sql);
		//check if successful
		if ($execute) {
			//echo "Registered student successfully";
			header("Location:display.php");
		} else{
			die(mysqli_error($connect));
		}
	}
	?>
</body>
</html>