<?php
$stock = 5;
$message = ($stock > 0) ? 'In stock' : 'Sold out';
?>
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TermaryOperator</title>
</head>
<body>
    <h1>The candy Store</h1>
    <h2>Chocolate</h2>
    <p><?= $message ?></p>
</body>
</html>