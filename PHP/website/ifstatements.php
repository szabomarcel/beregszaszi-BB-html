<?php
    $hours = 40;
    $rate = 15;
    $weekly_pay = null;

    if($houers <= 0){
        $weekly_pay = 0;
    }
    elseif($hours <= 40){
        $weekly_pay = $houers * $rate;   
    }
    else{
        $weekly_pay = ($rate * 40) + (($hours - 40) * ($rate * 1.5));
    }
    echo "You made \${$wwkly_pay} this week";


    /*$adult = false;

    if($adult){
        echo "You may enter this site";
    }
    else{
        echo "You most be an adult to enter";
    }*/
    
    /*$age = -1;

    if($age >= 100){
        echo "You are too old to enter this site";
    }
    elseif($age <= 18){
        echo "You may enter this site";
    }
    elseif($age <= 0){
        echo "That wasn't a valid age";
        // echo "You were just born";
    }
    else{
        echo "You most be 18+ to enter";
    }*/
?>