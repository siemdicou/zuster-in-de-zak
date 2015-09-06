<!DOCTYPE html>
<html>
<head>
	<title>login</title>
</head>
<link rel="stylesheet" type="text/css" href="css/main.css">
<body>
<?php 	require_once 'config/config.php';
	require_once 'library/database.php';

	 ?>
<div class="wrapper">
	<form action="login.php/action=?login" method="POST">
		<table>
			<tr>
				<td>Email:</td>
				<td><input type="text" name="mail" required></td>
			</tr>
			<tr>
				<td>Wachtwoord:</td>
				<td><input type="password" name="password" required></td>
			</tr>
			<tr>
				<td></td>
				<td><input type="submit" name="send"></td>
			</tr>
		</table>
	</form>

	<?php

	session_start();
	$action = (empty($_GET['action'])) ? '' : $_GET['action'];
	$request_mail = (empty($_POST['mail'])) ? '' : $_POST['mail'];
	$request_password = (empty($_POST['password'])) ? '' : $_POST['password'];

if ($action="login"){

	
	if ($request_mail != '' && $request_password != '')
	{
	$result = $mysqli->query("SELECT * FROM patient
								WHERE mail = '".$request_mail."' AND password = '".$request_password."'");	
	$patient_match_count = $result->num_rows;
		
		if ($patient_match_count == 1)
		{
			$patient_row = $result->fetch_assoc();
			$_SESSION['mail'] = $patient_row['mail'];
		}
		else
		{
			echo '<h2>Inloggen mislukt</h2>';
		}
	}
}

if (isset($_SESSION['mail']))
{
	include "index.php"
}
else
{
	echo "faal";
}
	 ?>
</div>
</body>
</html>