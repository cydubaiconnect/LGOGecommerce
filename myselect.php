<?php
$dbusername = "root";
$dbpassword = "";
$database = "loginform";

$connection = mysqli_connect('localhost',$dbusername,$dbpassword,$database);

if(!$connection)
{
die("Unable to connect to Database !");	
}
//$query = "select * from students";

$query = "select * from students where sno = 3";

$result = mysqli_query($connection,$query);



if($result->num_rows > 0)
{
	
	while($row = mysqli_fetch_assoc($result))
	{
		$username = $row['username'];
		$email = $row['email'];
		$password = $row['password'];
		
		echo "Username : ".$username."<br>";
		echo "Email :".$email."<br>";
		echo "Password : ".$password."<br>";
		
		echo "-----------------------------------"."<br>";
		
		
		
	}
	
	
}






?>