<?php
    $db = mysqli_connect('127.0.0.1', 'rool', '', 'youtube');
    if(!empty($_POST['logs'])){
        session_start();
        $username = mysqli_real_escape_string($db, $_SESSION['username']);
        $logs = mysqli_real_escape_string($db, $_POST['logs']);
        $time = date("h:i");

        $sql = "INSERT INTO logs(username, logs, Date) VALUES('$username', '$logs, '$time')";
        mysqli_query($db, $sql);
    }
    mysqli_close($db);
?>