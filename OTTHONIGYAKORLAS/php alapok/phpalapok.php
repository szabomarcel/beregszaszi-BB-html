<?php
require_once 'forms/forms.php';
?>
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="php.css">
    <title>Form Class</title>
</head>
<body>
    <?php
    echo '<h1>Form Class</h1>';
    $data = [
        'firstname' => "John",
        'lastname' => "Smith",
        'email' => "jssmith#mailbox.com",
        'pass' => "12345",
        'pass2' => "12345",
        'born' => "1995-03-12",
        'work' => "12",
    ];
    if(isset($_POST['submit'])){
        echo '<p>Submitted</p>';
        echo '<pre>';
        var_dump($_POST);
        echo '</pre>';
    }
    CreateForm($data);
    ?>
</body>
</html>