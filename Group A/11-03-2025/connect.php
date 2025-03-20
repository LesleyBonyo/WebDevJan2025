<?php
	//connect to mysql server
	$server = "localhost";
	$serveruseraccount = "root";
	$serveruserpassword = "";

	//establish a connection to db server
	$connect = mysqli_connect($server, $serveruseraccount, $serveruserpassword);
	//check if successfully connected
	if ($connect) {
		echo "Connection successful";
	} else{
		die(mysqli_connect_error($connect));
	}
	//create a database
	$query = "CREATE DATABASE groupbjan";
	//execute query
	$execute = mysqli_query($connect,$query);
	//check if successful
	if($execute){
		echo "Database created successfully";
	} else{
		die(mysqli_error());
	}



?>