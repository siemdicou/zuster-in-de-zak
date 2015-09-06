<!DOCTYPE html>
<html>
<head>
	<title>Zuster in de zak</title>
	<link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" type="text/css" href="css/main.css">
</head>
<body>
<div class="wrapper">
	<div class="appbackground"></div>
	<div class="app">
		<h1>Titel</h1>
		<?php
		$menu = ["Quizz","Profiel","Agenda","Dagboek","Nood"];
			for ($i=0; $i < 5; $i++) { 
				if ($i%2) {
					
					echo "<p class='white'><a href='".$menu[$i].".php'>".$menu[$i]."</a></p>";
				}
				else{
					echo "<p class='blue'><a href='".$menu[$i].".php'>".$menu[$i]."</a></p>";
				}
			}
		?>
	</div>
</div>

</body>
</html>