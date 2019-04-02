<?php

$host = 'localhost:3306';
$user = 'ovplayer_root';
$pass = 'ivailo31052002';
$database = 'ovplayer_register';

$con = mysqli_connect($host, $user, $pass, $database) or die("Connection failed!");
mysqli_select_db($con, $database);
mysqli_set_charset($con, "utf8");