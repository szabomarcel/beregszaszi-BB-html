<?php 
// $shopping_list = array('bread', 'cheese', 'milk');
$best_sellers = ['Chocolate', 'Mints', 'Fudge', 'Dubble gum', 'Toffee', 'Jelly beans',]
?>
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index Arrays</title>
</head>
<body>
    <h1>The Candy Store</h1>
    <h2>Best Sellers</h2>
    <ul>
        <li><?php echo $best_sellers[0]; ?></li>
        <li><?php echo $best_sellers[1]; ?></li>
        <li><?php echo $best_sellers[2]; ?></li>
    </ul>
</body>
</html>