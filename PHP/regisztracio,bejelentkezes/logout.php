<?php
    session_start();
    $_SESSION['username'] = $username;
    session_destroy();
?>