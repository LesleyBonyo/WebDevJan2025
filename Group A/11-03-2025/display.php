<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Display</title>
	<style>
		table, th, td{
			border: 1px solid black;
			border-collapse: collapse;
		}
		table{
			margin: auto;
			width: 60%;
		}
		.firstrow, th, button{
			background-color: black;
			color: white;
			border: 1px solid white;
		}
		.reg{
			display: block;
			margin: 10px auto;
		}
		a{
			color: white;
			text-decoration: none;
		}
	</style>
</head>
<body>
	<h1>Registered Students</h1>
	<table>
		<tr class="firstrow">
			<th>Student ID</th>
			<th>Student Name</th>
			<th>Student Email</th>
			<th>Delete</th>
			<th>Update</th>
		</tr>
		<!-- display the students in the db-->
		<?php
		//connect to db - groupbjan
		include "connectdb.php";
		//write your query
		$query = "SELECT * FROM student";
		//execute query
		$execute = mysqli_query($connect, $query);
		//check if successfully executed
		if($execute){
			//display the data on the page
			/*pick the data on first row
			$firstrow =mysqli_fetch_assoc($execute);
			echo $firstrow['student_name'];
			echo $firstrow['student_email'];*/
			while ($row = mysqli_fetch_assoc($execute)) {
				$id = $row['id'];
				$student_name = $row['student_name'];
				$student_email = $row['student_email'];
				echo "<tr> <td>$id</td>
				<td>$student_name</td>
				<td>$student_email</td>
				<td><button>
					<a href='delete.php?deleteid=$id'>Delete</a>
				</button></td>
				<td><button>
					<a href='update.php?updateid=$id'>Update</a>
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