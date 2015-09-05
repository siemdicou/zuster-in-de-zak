<!DOCTYPE html>
<html>
<head>
	<title>login</title>
</head>
<link rel="stylesheet" type="text/css" href="css/main.css">
<body>
<div class="wrapper">
	<form action="action=?login">
		<table>
			<tr>
				<td>Email:</td>
				<td><input type="text" required></td>
			</tr>
			<tr>
				<td>Wachtwoord:</td>
				<td><input type="password" name="" required></td>
			</tr>
			<tr>
				<td></td>
				<td><input type="submit" name="send"></td>
			</tr>
		</table>
	</form>

	<?php
	$action = (empty($_GET['action'])) ? '' : $_GET['action'];
	$request_username = (empty($_POST['username'])) ? '' : $_POST['username'];
	$request_password = (empty($_POST['password'])) ? '' : $_POST['password'];
	
	if ($request_username != '' && $request_password != '')
	{
	$result = $mysqli->query("SELECT * FROM users 
								WHERE username = '".$request_username."' AND password = '".$request_password."'");	
	$user_match_count = $result->num_rows;
	
	if ($user_match_count == 1)
	{
		$user_row = $result->fetch_assoc();
		$_SESSION['username'] = $user_row['username'];
	}
	else
	{
		echo '<h2>Inloggen mislukt</h2>';
	}
}
	 ?>
</div>
</body>
</html>