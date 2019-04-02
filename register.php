<?php 
require 'server.php';

if(isset($_POST['sign-up'])) {

    $username = mysqli_escape_string($con, $_POST['username']);
    $email = mysqli_escape_string($con, $_POST['email']);
    $password = mysqli_escape_string($con, $_POST['pass']);
    $passwordR = mysqli_escape_string($con, $_POST['pass-r']);

    $check = mysqli_query($con, "SELECT username FROM `system` WHERE username='$username'");
    $check2 = mysqli_query($con, "SELECT email FROM `system` WHERE email='$email'");
    $num2 = mysqli_num_rows($check2);
    $num = mysqli_num_rows($check);
    if($password == $passwordR) {
        if($num > 0) {
            echo "This username is already exist!";
        }else{
            if($num2 > 0) {
                echo "This email is already exist!";
            }else {
            mysqli_query($con, "INSERT INTO `system`(`id`, `username`, `email`, `password`) VALUES (NULL,'$username','$email','$password')");
            header('location: player.php');
            }
        }
    }else {
        header('location: register.html?passwords-doesn-t-match');
    }
    mysqli_close($con);
}