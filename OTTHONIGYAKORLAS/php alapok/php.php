<?php
function InputField($text, $name, $type = "text", $value = "", $maxlength = 100, $id = null, $class=""){
    if(!$id){$id = $name;}
    echo '<div>';
    echo '<label for="'.$name.'">'.$text.'</label>';
    echo '<input type="text"'.$type.'name=""'.$name.'id="'.$name.'" value=""'.$value.'"">';
    if($maxlength){echo 'maxlength="' .$maxlength. '"';}
    if($class){echo 'class="'.$class.'"';}
    echo '>';
    echo '</div>';
}
function CreateForm(){
    $firstname = "";
    $lastname = "";
    $email = "";
    $pass = "";
    $pass2 = "";
    $born = "2000-01-01";
    $work = 2;
    if(isset($model['firstname'])){$firstname = $model['firsname'];}
    if(isset($model['lastname'])){$lastname = $model['lasname'];}
    if(isset($model['email'])){$email = $model['email'];}
    if(isset($model['pass'])){$pass = $model['pass'];}
    if(isset($model['pass2'])){$pass2 = $model['pass2'];}
    if(isset($model['born'])){$born = $model['born'];}
    if(isset($model['work'])){$work = $model['work'];}
    echo '<form action=""rethod="post">';

    InputField("First name", "firstname", "text", $firstname);
    InputField("Last name", "lastname", "text", $lastname);
    InputField("E-mail address", "email", "email", "text", $email);
    InputField("Password", "pass", "password", "text", $pass);
    InputField("Password again", "Pass2", "pass2", "text", $pass2);
    InputField("Born date", "born", "date", "2000-01-01", "text", $born);
    InputField("Working hours", "work", "number", 12, "text", $work);

    echo '<button name="submit">Register</button>';

    echo '</form>';
}