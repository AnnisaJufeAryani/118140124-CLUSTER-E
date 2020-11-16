<!DOCTYPE html>
<html>
<head>
	<title>Latihan 3</title>
</head>

<body>
	<?php 
		for($i=0;$i<=50;$i++){
			$bil=0;
			for($j=1;$j<=$i;$j++){
				if($i % $j == 0) {
					$bil++;
				}
			}
			if($bil == 2){
				echo $i. " ";
			}
		}
	 ?>

</body>
</html>