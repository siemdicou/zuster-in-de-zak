<!DOCTYPE html>
<html>
<head>
	<title>Zuster in de zak</title>
	<link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" type="text/css" href="css/main.css">
</head>
<body>
<div class="wrapper">
	<div class="app">
		<h1>Titel</h1>
		<?php
		$menu = ["Quizz","Mijn gegevens","Agenda","Pillen","Dagboek"];
			for ($i=0; $i < 5; $i++) { 
				if ($i%2) {
					
					echo "<p class='white'>".$menu[$i]."</p>";
					
				}
				else{
					echo "<p class='blue'>".$menu[$i]."</p>";
				}
			}
		?>
	</div>
</div>

</body>
</html>