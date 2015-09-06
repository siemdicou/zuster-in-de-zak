<?php
	require_once 'config/config.php';
	require_once 'library/database.php';
	require_once 'login.php';
?>
<?php
if ($mail && $password) {
	$result = $mysqli->query("SELECT * FROM patient WHERE $_SESSION['mail']");

	while ($patient = $result->fetch_assoc()){
		echo "Voornaam: ".$patient['naam']." Achternaam: ".$patient['achternaam']." E-mail: ".$patient['mail']."<br>";
	}
}
	
?>