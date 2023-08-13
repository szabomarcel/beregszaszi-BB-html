<?php
    $db = new mysqli("localhost", "root", "", "youtube");
    if(isset($_POST['submit'])){
        $errors = array();
        $true = true;
        if(empty($_POST['username'])){
            $true = false;
            array_push($errors, "A felhasználnév üres");
        }
        if(empty($_POST['password'])){
            $true = false;
            array_push($errors, "A jelszó üres!");
        } if(empty($_POST['password_2'])){
            $true = false;
            array_push($errors, "A jelszó megerősitése!");
        }
        if(!($_POST['password']==$_POST['password_2'])){
            $true = false;
            array_push($errors, "A jelszavak nem egynelöek.");
        }
        if($true){
            // regisztráció
            $username = mysqli_real_escape_string($db, $_POST['username']);
            $password = mysqli_real_escape_string($db, $_POST['password']);
            $password = md5($password);

            $sql = "SELECT * FORM usesrs WHERE username='username' and password='password'";
            $query = $db->query($sql);
            if(mysqli_num_rows($query) == 1){
                session_start();
                $_SESSION['usebane'] = $username;
                header('location: home.php');
            }else{
                array_push($errors,"A felhasználónév és a jelszó nem megfelelő.");
            }
        }
    }
    $db ->close();
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
    <form action="index.php" method="POST">
        username<input type="text" name="username"><br>
        password<input type="password" name="password">
        <input value="Bejelentkezés!" type="submit" name="submit">
    </form>
    
    <?php
         if(!empty($errors)){
            foreach($errors as $key){
                echo $key . "<br>";
            }
        }
    ?>
</body>
</html>