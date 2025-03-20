<?php
	//pick form data
	//using post method
//check if user has entered all the data
	if (isset($_POST['fullname'], $_POST['email'])) {
		// code...
		$full_name = $_POST['fullname'];
		$email = $_POST['email'];
		echo "Welcome<b> $full_name</b> your email is $email";
	}
	//using get method
	if (isset($_GET['fullname'], $_GET['email'])) {
		// code...
		$full_name = $_GET['fullname'];
		$email = $_GET['email'];
		echo "Welcome!!<b> $full_name</b> your email is $email";
	}

?>