<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Display</title>
	<style>
		table, th, td {
			border: 1px solid black;
			border-collapse: collapse;
		}
		table{
			margin: auto;
			width: 70%;
		}
		.firstrow, th, button{
			background-color: darkblue;
			color: white;
			border: 1px solid white;
		}
		a{
			text-decoration: none;
			color: white;
		}
		.reg{
			display: block;
			margin: 10px auto;
		}
	</style>
</head>
<body>
	<h1>Registered Students</h1>
	<table>
		<tr class="firstrow">
			<th>Student id</th>
			<th>Student Name</th>
			<th>Course</th>
			<th>Delete</th>
			<th>Update</th>
		</tr>
		<!-- display the students in our db-->
	<?php
		//connect to db - groupbmar
		include "connectdb.php";
		//write your query
		$query = "SELECT * FROM student";
		//execute query
		$execute = mysqli_query($connect, $query);
		//check if successful
		if ($execute) {
			//display the data in the db
			/*test with one record
			$firstrecord = mysqli_fetch_assoc($execute);
			echo $firstrecord['course'];*/
			while ($record = mysqli_fetch_assoc($execute)) {
				// display the record
				$student_id = $record['student_id'];
				$student_name = $record['student_name'];
				$course = $record['course'];

				echo "<tr><td>$student_id</td>
				<td>$student_name</td>
				<td>$course</td>
				<td><button>
					<a href='delete.php?deleteid=$student_id'>Delete</a>
				</button></td>
				<td><button>
					<a href='update.php?updateid=$student_id'>Update</a>
				</button></td>
				</tr>";
			}
		} else{
			die(mysqli_error($connect));
		}
	?>
	</table>
	<button class="reg"><a href="register.php">Register Student</a></button>
</body>
</html>