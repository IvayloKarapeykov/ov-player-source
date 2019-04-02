function fileUploadS() {
    alert(".$name.' has been uploaded'");
}

function fileName() {
    var thefile = document.getElementById("file");
    var button = document.getElementById("btnUpload");
    button.innerHTML = thefile.files.item(0).name;
    button.style.margin = "10px 4px";
    button.style.fontSize = "14px";
}

function upload() {
    var y = document.getElementById("upload");
    if (y.style.display === "block") {
        y.style.display = "none";
    } else {
        y.style.display = "block";
    }
}

function logout(url) {
    var win = window.open('logout.php', '_self');
    win.focus();
    }
    function gsettings(url) {
    var win = window.open('gsettings.html', '_blank');
    win.focus();
}

function hide() {
    var x = document.getElementById("options");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    var y = document.getElementById("files");
    if (y.style.display === "block") {
        y.style.display = "none";
    }
    var z = document.getElementById("upload");
    if (z.style.display === "block") {
        z.style.display = "none";
    }
}

function files() {
    var x = document.getElementById("options");
    if (x.style.display === "block") {
        x.style.display = "none";
    }
    var y = document.getElementById("files");
    if (y.style.display === "block") {
        y.style.display = "none";
    } else {
        y.style.display = "block";
    }
    var z = document.getElementById("upload");
    if (z.style.display === "block") {
        z.style.display = "none";
    }
}

function plhide() {
    var a = document.getElementById("welcome");
    var x = document.getElementById("wrapp");
    var y = document.getElementById("videos");
    if(a.style.display === "none") {
        a.style.display = "none";
    } else {
        a.style.display = "none";
    }
    if (x.style.display === "block") {
        x.style.display = "none";
    }
    if (y.style.display === "block") {
        y.style.display = "none";
    } else {
        y.style.display = "block";
    }
}

function gsettings() {
    var a = document.getElementById("welcome");
    var x = document.getElementById("wrapp");
    var z = document.getElementById("videos");
    if(a.style.display === "none") {
        a.style.display = "none";
    } else {
        a.style.display = "none";
    }
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    if (z.style.display === "block") {
        z.style.display = "none";
    } 
}


