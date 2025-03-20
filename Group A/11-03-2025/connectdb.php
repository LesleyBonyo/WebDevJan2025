<?php
	//connect to groupbjan database
	$server = "localhost";
	$serveruseraccount = "root";
	$serveruserpassword = "";
	$db = "groupbjan";

	//establish connection
	$connect = mysqli_connect($server, $serveruseraccount, $serveruserpassword, $db);
	//check if not successful
	if(!$connect){
		die(mysqli_connect_error($connect));
	}


?>