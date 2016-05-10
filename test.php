<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8"/>
		<title>"Write!"</title>
		<link rel="stylesheet" href="stylesheet.css">
	</head>
	
	<body>
	<?php
				header('Content-Type: image/gif');
				readfile('C:\Users\Lady Wulff\Documents\html\Write!\awesomedance.gif');
				echo <p>Test</p>;
			?>
		<h1>Write!</h1>
			<div>
				<form id="writearea">
					<textarea id="story" cols="80" rows="30"></textarea>
				</form>
			</div>

			<div>
			<form>
				<span class="meta">
					Word Count: <span id="words">0</span>
				</span><br>
				<span id="settings">
					<p>Settings:</p> <br>
					<input type="checkbox" name="Punishment" value="punishment">Punishment<br>
					<input type="checkbox" name="Reward" value="reward">Reward<br>
				</span>
			</div>
			
					
	</body>
</html>