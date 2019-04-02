<?php
require_once('server.php');

if(isset($_POST['submit'])) {

    $name = $_FILES['file']['name'];
    $temp = $_FILES['file']['tmp_name'];

    move_uploaded_file($temp,"uploaded/".$name);
    $url = "http://ov-player.eu/uploaded/$name";
    mysqli_query($con, "INSERT INTO `videos` VALUE ('','$name','$url')");
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="player.css">
    <link rel="stylesheet" type="text/css" href="gsettings.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="functions.js"></script>
    <script src="gsettings.js"></script>
    <link rel="shortcut icon" href="images/logo.ico"/>
    <title>OV Player</title>
</head>
<body id="body">
    <header id="header"></header>
    <div id="wrap">
        <div class="left-side" id="left-side">
            <button class="btn" id="bacc" onclick="hide();"><i class="fa fa-bars"></i></button>
            <button class="btn" id="menu" onclick="files();"><i class="fa fa-folder"></i></button>
        </div> 
        <div class="op-side">
            <div id="options">
            <button class="btn1" id="aset" onclick="logout();">Sign out</button>
            <button class="btn2" id="gset" onclick="gsettings();">Settings</button>
            </div>
            <div id="files">
                <button class="btn3" onclick="upload();" id="open">Upload video</button>
                <button class="btn4" onclick="plhide();" id="bplayer">Videos</button>
            </div>
            <div id="upload">
                <form action="player.php" method="POST" enctype="multipart/form-data" id="formupload">
                    <input type="file" name="file" id="file" class="inputfile" onchange="fileName();" multiple>
                    <label for="file" id="lblChoose">Choose a file...</label>
                    <button type="submit" name="submit" id="btnUpload" onclick="fileName();">Upload</button>
                </form>
            </div>
        </div>
        <div id="welcome">
            <h1>Welcome to OV Player</h1>
            <img id="logo" src="images/logo.png">
        </div>
    <div id="wrapp">
        <div id="left">
            <button id="btn_theme" onclick="themes();" class="btn5">Themes</button>
            <button id="btn_language" onclick="languages();" class="btn5">Languages</button>
        </div>
        <div id="theme">
                <button id="btn_orange" onclick="orange();">Orange</button>
                <button id="btn_lblue" onclick="lblue();">Light Blue</button>
                <button id="btn_pink" onclick="pink();">Pink</button>
                <button id="btn_red" onclick="red();">Red</button>
                <button id="btn_yellow" onclick="yellow();">Yellow</button>
                <button id="btn_purple" onclick="purple();">Purple</button> 
        </div>
        <div id="languages">
            <img src="images/Bulgaria.png" width="200px" onclick="bulgarian();">
            <img src="images/English.png" width="205px" onclick="english();">
        </div>
    </div>
    <div id="videos">
        <?php 
        
        $query = mysqli_query($con, "SELECT * FROM `videos`");
        while($row = mysqli_fetch_assoc($query))
        {
           $name = $row['name'];
           $url = $row['url'];
           
        $btnClass = "btnsUploads";
        echo "<button class='$btnClass'><a href='$url'>$name</a></button><br>";
        }
        ?>
    </div>
</body>
</html>