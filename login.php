<?php
if(isset($_POST['sign-in'])) {
    require 'register.php';
    
    $email = mysqli_real_escape_string($con, $_POST['email']);
    $password = mysqli_real_escape_string($con, $_POST['pwd']);
    $passencrypt = password_hash($password, PASSWORD_BCRYPT);

    $check = "SELECT `email` FROM `system` WHERE `email`='$email' AND `password`='$password'";
    $result = mysqli_query($con, $check);
    if(mysqli_num_rows($result) > 0) {
            header("location: player.php");
           
    }else {
        header('location: index.html?signin=incorrect-password');
    }
    
    mysqli_close($con);
}