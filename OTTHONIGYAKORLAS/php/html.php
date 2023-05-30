<?php
require_once 'forms/form-builder.php';
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

    $data=[
        'firstname' => "John",
        'lastname' => "Smith",
        'email' => "jsmith",
        'pass' => "12345",
        'pass2' => "12345",
        'born' => "1995-03-12",
        'work' => 8
    ];
    $form = new FormBuilder();

    $form->add(new InputField("First name","firstname"))
    ->add(new InputField("Last name","lastname"))
    ->add(new InputField("E-mail address","email"))
    ->add(new InputField("Password","pass","password"))
    ->add(new InputField("Password again","pass2", "password"))
    ->add(new InputField("Born date","born","date"))
    ->add(new InputField("Working hours","work", "number"))
    ->setBtnText("Regiszter")
    ->onsubmit(function(){
        echo '<p>Submitted</p>';
    });
    echo $fotm -> asHTML($data);
    
    /*
    echo '<form action="" metod="post">';
    $field = new InputField("First name","Firstname");
    $field -> setId("register-firstname");
    echo $field->asHTML();
    
    $field = new InputField("E-mail address","enail");
    $field ->setId("register-email")->setPlaceholder("Example:jim@host.com");
    echo $field->asHTML();
    echo '<button>Submit</button>';
    echo '</form>';*/
    ?>
</body>
</html>