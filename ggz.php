<!DOCTYPE html>
<html>
<head>
	<title>Zuster in de zak</title>
	<link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" type="text/css" href="css/ggz.css">
</head>
<body>
	<div class="wrapper">
		<h1>Welkom (naam ggz'er)</h1>
		<hr>
		<nav>
			<ul>
				<?php
					$menu = ["Patientenoverzicht","Vragenlijsten"];
						for ($i=0; $i < 2; $i++) { 
							if ($i%2) {
								
								echo "<li class='menu1'><a href='".$menu[$i].".php'>".$menu[$i]."</a></li>";
								
							}
							else{
								echo "<li class='menu2'><a href='".$menu[$i].".php'>".$menu[$i]."</a></li>";
							}
						}
					?>
			</ul>
		</nav>
	</div>
</body>
</html>