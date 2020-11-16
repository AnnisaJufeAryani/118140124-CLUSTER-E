<!DOCTYPE html>
<html>
<head>
	<title>Latihan 2</title>
</head>

<body>
	<?php 
		$data = array("lanime","aduh","qifuat","toda","anevi","samid","kifuat");

		sort($data);

		foreach ($data as $hasil) {
			echo $hasil. "<br>";
			
		}
	 ?>

</body>
</html>