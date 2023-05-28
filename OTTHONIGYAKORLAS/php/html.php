<?php
require_once 'forms/input-field.php';
?>
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    echo '<h1>Form Class</h1>';
    echo '<form action="" metod="post">';
    $field = new InputField("First name","Firstname");
    $field -> setId("register-firstname");
    echo $field->asHTML();
    echo '<button>Submit</button>';
    echo '</form>';
    ?>
</body>
</html>