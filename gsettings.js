function themes() {
    var x = document.getElementById("theme");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    var y = document.getElementById("languages");
    if (y.style.display === "block") {
        y.style.display = "none";
    }
}

function languages() {
    var x = document.getElementById("languages");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    var y = document.getElementById("theme");
    if (y.style.display === "block") {
        y.style.display = "none";
    }
}

function english() {
    document.getElementById("aset").innerHTML = "Sign out";
    document.getElementById("gset").innerHTML = "Settings";
    document.getElementById("open").innerHTML = "Upload video";
    document.getElementById("bplayer").innerHTML = "Videos";
    document.getElementById("btnUpload").innerHTML = "Upload";
    document.getElementById("lblChoose").innerHTML = "Choose a file...";
    document.getElementById("btn_theme").innerHTML = "Themes";
    document.getElementById("btn_language").innerHTML = "Languages";
    document.getElementById("btn_language").style.marginLeft = "200px";
    document.getElementById("btn_theme").style.marginLeft = "220px";
    document.getElementById("languages").style.width = "1278px";
    document.getElementById("theme").style.width = "1278px";
    document.getElementById("btn_orange").innerHTML = "Orange";
    document.getElementById("btn_lblue").innerHTML = "Light Blue";
    document.getElementById("btn_pink").innerHTML = "Pink";
    document.getElementById("btn_red").innerHTML = "Red";
    document.getElementById("btn_yellow").innerHTML = "Yellow";
    document.getElementById("btn_purple").innerHTML = "Purple";
}

function bulgarian() {
    document.getElementById("aset").innerHTML = "Отписване";
    document.getElementById("gset").innerHTML = "Настройки";
    document.getElementById("open").innerHTML = "Качи видео";
    document.getElementById("bplayer").innerHTML = "Видеа";
    document.getElementById("btnUpload").innerHTML = "Качи";
    document.getElementById("lblChoose").innerHTML = "Избери видео...";
    document.getElementById("btn_theme").innerHTML = "Теми";
    document.getElementById("btn_language").innerHTML = "Езици";
    document.getElementById("btn_language").style.marginLeft = "226px";
    document.getElementById("btn_theme").style.marginLeft = "233px";
    document.getElementById("languages").style.width = "1300px";
    document.getElementById("theme").style.width = "1300px";
    document.getElementById("btn_orange").innerHTML = "Оранжево";
    document.getElementById("btn_lblue").innerHTML = "Светло Синьо";
    document.getElementById("btn_pink").innerHTML = "Розово";
    document.getElementById("btn_red").innerHTML = "Червено";
    document.getElementById("btn_yellow").innerHTML = "Жълто";
    document.getElementById("btn_purple").innerHTML = "Лилаво";
}

function orange() {
    document.getElementById("header").style.backgroundColor = "#ED7000";
    document.getElementById("body").style.backgroundColor = "#ED7000";
    document.getElementById("welcome").style.backgroundColor = "#ED7000";
    document.getElementById("videos").style.backgroundColor = "#ED70000";
    document.getElementById("left-side").style.backgroundColor = "#ED7000";
    document.getElementById("aset").style.backgroundColor = "#ED7000";
    document.getElementById("gset").style.backgroundColor = "#ED7000";
    document.getElementById("open").style.backgroundColor = "#ED7000";
    document.getElementById("bplayer").style.backgroundColor = "#ED7000";
    document.getElementById("btn_theme").style.borderBottomColor = "#ED7000";
    document.getElementById("btn_language").style.borderBottomColor = "#ED7000";
    document.getElementById("btnUpload").style.backgroundColor = "#ED7000";
    document.getElementById("lblChoose").style.border = "2px solid #ED7000";
    document.getElementById("lblChoose").style.color = "#ED7000";
    document.getElementById("bacc").style.backgroundColor = "#1E1E1E";
    document.getElementById("menu").style.backgroundColor = "#1E1E1E";
    document.getElementById("aset").onmouseover = function() {
        this.style.backgroundColor = "rgb(235, 135, 5)";
    }
    document.getElementById("aset").onmouseout = function() {
        this.style.backgroundColor = "#ED7000";
    }
    document.getElementById("gset").onmouseover = function() {
        this.style.backgroundColor = "rgb(235, 135, 5)";
    }
    document.getElementById("gset").onmouseout = function() {
        this.style.backgroundColor = "#ED7000";
    }
    document.getElementById("open").onmouseover = function() {
        this.style.backgroundColor = "rgb(235, 135, 5)";
    }
    document.getElementById("open").onmouseout = function() {
        this.style.backgroundColor = "#ED7000";
    }
    document.getElementById("bplayer").onmouseover = function() {
        this.style.backgroundColor = "rgb(235, 135, 5)";
    }
    document.getElementById("bplayer").onmouseout = function() {
        this.style.backgroundColor = "#ED7000";
    }
    document.getElementById("bacc").onmouseover = function() {
        this.style.backgroundColor = "rgb(235, 135, 5)";
    }
    document.getElementById("bacc").onmouseout = function() {
        this.style.backgroundColor = "#ED7000";
        this.style.backgroundColor = "#1E1E1E";
    }
    document.getElementById("menu").onmouseover = function() {
        this.style.backgroundColor = "rgb(235, 135, 5)";
    }
    document.getElementById("menu").onmouseout = function() {
        this.style.backgroundColor = "#ED7000";
        this.style.backgroundColor = "#1E1E1E";
    }
    document.getElementById("lblChoose").onmouseover = function() {
        this.style.color = "rgb(235, 135, 5)";
    }
    document.getElementById("lblChoose").onmouseout = function() {
        this.style.color = "#ED7000";
    }
    document.getElementById("btnUpload").onmouseover = function() {
        this.style.backgroundColor = "rgb(235, 135, 5)";
    }
    document.getElementById("btnUpload").onmouseout = function() {
        this.style.backgroundColor = "#ED7000";
    }
}

function lblue() {
    document.getElementById("header").style.backgroundColor = "#0397D7";
    document.getElementById("body").style.backgroundColor = "#0397D7";
    document.getElementById("welcome").style.backgroundColor = "#0397D7";
    document.getElementById("videos").style.backgroundColor = "#0397D7";
    document.getElementById("left-side").style.backgroundColor = "#0397D7";
    document.getElementById("aset").style.backgroundColor = "#0397D7";
    document.getElementById("gset").style.backgroundColor = "#0397D7";
    document.getElementById("open").style.backgroundColor = "#0397D7";
    document.getElementById("bplayer").style.backgroundColor = "#0397D7";
    document.getElementById("btn_theme").style.borderBottomColor = "#0397D7";
    document.getElementById("btn_language").style.borderBottomColor = "#0397D7";
    document.getElementById("btnUpload").style.backgroundColor = "#0397D7";
    document.getElementById("lblChoose").style.border = "2px solid #0397D7";
    document.getElementById("lblChoose").style.color = "#0397D7";
    document.getElementById("bacc").style.backgroundColor = "#1E1E1E";
    document.getElementById("menu").style.backgroundColor = "#1E1E1E";
    document.getElementById("aset").onmouseover = function() {
        this.style.backgroundColor = "#026a97";
    }
    document.getElementById("aset").onmouseout = function() {
        this.style.backgroundColor = "#0397D7";
    }
    document.getElementById("gset").onmouseover = function() {
        this.style.backgroundColor = "#026a97";
    }
    document.getElementById("gset").onmouseout = function() {
        this.style.backgroundColor = "#0397D7";
    }
    document.getElementById("open").onmouseover = function() {
        this.style.backgroundColor = "#026a97";
    }
    document.getElementById("open").onmouseout = function() {
        this.style.backgroundColor = "#0397D7";
    }
    document.getElementById("bplayer").onmouseover = function() {
        this.style.backgroundColor = "#026a97";
    }
    document.getElementById("bplayer").onmouseout = function() {
        this.style.backgroundColor = "#0397D7";
    }
    document.getElementById("bacc").onmouseover = function() {
        this.style.backgroundColor = "#026a97";
    }
    document.getElementById("bacc").onmouseout = function() {
        this.style.backgroundColor = "#0397D7";
        this.style.backgroundColor = "#1E1E1E";
    }
    document.getElementById("menu").onmouseover = function() {
        this.style.backgroundColor = "#026a97";
    }
    document.getElementById("menu").onmouseout = function() {
        this.style.backgroundColor = "#0397D7";
        this.style.backgroundColor = "#1E1E1E";
    }
    document.getElementById("lblChoose").onmouseover = function() {
        this.style.color = "#026a97";
    }
    document.getElementById("lblChoose").onmouseout = function() {
        this.style.color = "#0397D7";
    }
    document.getElementById("btnUpload").onmouseover = function() {
        this.style.backgroundColor = "#026a97";
    }
    document.getElementById("btnUpload").onmouseout = function() {
        this.style.backgroundColor = "#0397D7";
    }
}

function pink() {
    document.getElementById("header").style.backgroundColor = "#EE44A6";
    document.getElementById("body").style.backgroundColor = "#EE44A6";
    document.getElementById("welcome").style.backgroundColor = "#EE44A6";
    document.getElementById("videos").style.backgroundColor = "#EE44A6";
    document.getElementById("left-side").style.backgroundColor = "#EE44A6";
    document.getElementById("aset").style.backgroundColor = "#EE44A6";
    document.getElementById("gset").style.backgroundColor = "#EE44A6";
    document.getElementById("open").style.backgroundColor = "#EE44A6";
    document.getElementById("bplayer").style.backgroundColor = "#EE44A6";
    document.getElementById("btn_theme").style.borderBottomColor = "#EE44A6";
    document.getElementById("btn_language").style.borderBottomColor = "#EE44A6";
    document.getElementById("btnUpload").style.backgroundColor = "#EE44A6";
    document.getElementById("lblChoose").style.border = "2px solid #EE44A6";
    document.getElementById("lblChoose").style.color = "#EE44A6";
    document.getElementById("bacc").style.backgroundColor = "#1E1E1E";
    document.getElementById("menu").style.backgroundColor = "#1E1E1E";
    document.getElementById("aset").onmouseover = function() {
        this.style.backgroundColor = "#a30f66";
    }
    document.getElementById("aset").onmouseout = function() {
        this.style.backgroundColor = "#EE44A6";
    }
    document.getElementById("gset").onmouseover = function() {
        this.style.backgroundColor = "#a30f66";
    }
    document.getElementById("gset").onmouseout = function() {
        this.style.backgroundColor = "#EE44A6";
    }
    document.getElementById("open").onmouseover = function() {
        this.style.backgroundColor = "#a30f66";
    }
    document.getElementById("open").onmouseout = function() {
        this.style.backgroundColor = "#EE44A6";
    }
    document.getElementById("bplayer").onmouseover = function() {
        this.style.backgroundColor = "#a30f66";
    }
    document.getElementById("bplayer").onmouseout = function() {
        this.style.backgroundColor = "#EE44A6";
    }
    document.getElementById("bacc").onmouseover = function() {
        this.style.backgroundColor = "#a30f66";
    }
    document.getElementById("bacc").onmouseout = function() {
        this.style.backgroundColor = "#EE44A6";
        this.style.backgroundColor = "#1E1E1E";
    }
    document.getElementById("menu").onmouseover = function() {
        this.style.backgroundColor = "#a30f66";
    }
    document.getElementById("menu").onmouseout = function() {
        this.style.backgroundColor = "#EE44A6";
        this.style.backgroundColor = "#1E1E1E";
    }
    document.getElementById("lblChoose").onmouseover = function() {
        this.style.color = "#a30f66";
    }
    document.getElementById("lblChoose").onmouseout = function() {
        this.style.color = "#EE44A6";
    }
    document.getElementById("btnUpload").onmouseover = function() {
        this.style.backgroundColor = "#a30f66";
    }
    document.getElementById("btnUpload").onmouseout = function() {
        this.style.backgroundColor = "#EE44A6";
    }
}

function red() {
    document.getElementById("header").style.backgroundColor = "#D91C23";
    document.getElementById("body").style.backgroundColor = "#D91C23";
    document.getElementById("welcome").style.backgroundColor = "#D91C23";
    document.getElementById("videos").style.backgroundColor = "#D91C23";
    document.getElementById("left-side").style.backgroundColor = "#D91C23";
    document.getElementById("aset").style.backgroundColor = "#D91C23";
    document.getElementById("gset").style.backgroundColor = "#D91C23";
    document.getElementById("open").style.backgroundColor = "#D91C23";
    document.getElementById("bplayer").style.backgroundColor = "#D91C23";
    document.getElementById("btn_theme").style.borderBottomColor = "#D91C23";
    document.getElementById("btn_language").style.borderBottomColor = "#D91C23";
    document.getElementById("btnUpload").style.backgroundColor = "#D91C23";
    document.getElementById("lblChoose").style.border = "2px solid #D91C23";
    document.getElementById("lblChoose").style.color = "#D91C23";
    document.getElementById("bacc").style.backgroundColor = "#1E1E1E";
    document.getElementById("menu").style.backgroundColor = "#1E1E1E";
    document.getElementById("aset").onmouseover = function() {
        this.style.backgroundColor = "#9e1519";
    }
    document.getElementById("aset").onmouseout = function() {
        this.style.backgroundColor = "#D91C23";
    }
    document.getElementById("gset").onmouseover = function() {
        this.style.backgroundColor = "#9e1519";
    }
    document.getElementById("gset").onmouseout = function() {
        this.style.backgroundColor = "#D91C23";
    }
    document.getElementById("open").onmouseover = function() {
        this.style.backgroundColor = "#9e1519";
    }
    document.getElementById("open").onmouseout = function() {
        this.style.backgroundColor = "#D91C23";
    }
    document.getElementById("bplayer").onmouseover = function() {
        this.style.backgroundColor = "#9e1519";
    }
    document.getElementById("bplayer").onmouseout = function() {
        this.style.backgroundColor = "#D91C23";
    }
    document.getElementById("bacc").onmouseover = function() {
        this.style.backgroundColor = "#9e1519";
    }
    document.getElementById("bacc").onmouseout = function() {
        this.style.backgroundColor = "#D91C23";
        this.style.backgroundColor = "#1E1E1E";
    }
    document.getElementById("menu").onmouseover = function() {
        this.style.backgroundColor = "#9e1519";
    }
    document.getElementById("menu").onmouseout = function() {
        this.style.backgroundColor = "#D91C23";
        this.style.backgroundColor = "#1E1E1E";
    }
    document.getElementById("lblChoose").onmouseover = function() {
        this.style.color = "#9e1519";
    }
    document.getElementById("lblChoose").onmouseout = function() {
        this.style.color = "#D91C23";
    }
    document.getElementById("btnUpload").onmouseover = function() {
        this.style.backgroundColor = "#9e1519";
    }
    document.getElementById("btnUpload").onmouseout = function() {
        this.style.backgroundColor = "#D91C23";
    }
}

function yellow() {
    document.getElementById("header").style.backgroundColor = "#EBBA10";
    document.getElementById("body").style.backgroundColor = "#EBBA10";
    document.getElementById("welcome").style.backgroundColor = "#EBBA10";
    document.getElementById("videos").style.backgroundColor = "#EBBA10";
    document.getElementById("left-side").style.backgroundColor = "#EBBA10";
    document.getElementById("aset").style.backgroundColor = "#EBBA10";
    document.getElementById("gset").style.backgroundColor = "#EBBA10";
    document.getElementById("open").style.backgroundColor = "#EBBA10";
    document.getElementById("bplayer").style.backgroundColor = "#EBBA10";
    document.getElementById("btn_theme").style.borderBottomColor = "#EBBA10";
    document.getElementById("btn_language").style.borderBottomColor = "#EBBA10";
    document.getElementById("btnUpload").style.backgroundColor = "#EBBA10";
    document.getElementById("lblChoose").style.border = "2px solid #EBBA10";
    document.getElementById("lblChoose").style.color = "#EBBA10";
    document.getElementById("bacc").style.backgroundColor = "#1E1E1E";
    document.getElementById("menu").style.backgroundColor = "#1E1E1E";
    document.getElementById("aset").onmouseover = function() {
        this.style.backgroundColor = "#bf980d";
    }
    document.getElementById("aset").onmouseout = function() {
        this.style.backgroundColor = "#EBBA10";
    }
    document.getElementById("gset").onmouseover = function() {
        this.style.backgroundColor = "#bf980d";
    }
    document.getElementById("gset").onmouseout = function() {
        this.style.backgroundColor = "#EBBA10";
    }
    document.getElementById("open").onmouseover = function() {
        this.style.backgroundColor = "#bf980d";
    }
    document.getElementById("open").onmouseout = function() {
        this.style.backgroundColor = "#EBBA10";
    }
    document.getElementById("bplayer").onmouseover = function() {
        this.style.backgroundColor = "#bf980d";
    }
    document.getElementById("bplayer").onmouseout = function() {
        this.style.backgroundColor = "#EBBA10";
    }
    document.getElementById("bacc").onmouseover = function() {
        this.style.backgroundColor = "#bf980d";
    }
    document.getElementById("bacc").onmouseout = function() {
        this.style.backgroundColor = "#EBBA10";
        this.style.backgroundColor = "#1E1E1E";
    }
    document.getElementById("menu").onmouseover = function() {
        this.style.backgroundColor = "#bf980d";
    }
    document.getElementById("menu").onmouseout = function() {
        this.style.backgroundColor = "#EBBA10";
        this.style.backgroundColor = "#1E1E1E";
    }
    document.getElementById("lblChoose").onmouseover = function() {
        this.style.color = "#bf980d";
    }
    document.getElementById("lblChoose").onmouseout = function() {
        this.style.color = "#EBBA10";
    }
    document.getElementById("btnUpload").onmouseover = function() {
        this.style.backgroundColor = "#bf980d";
    }
    document.getElementById("btnUpload").onmouseout = function() {
        this.style.backgroundColor = "#EBBA10";
    }
}

function purple() {
    document.getElementById("header").style.backgroundColor = "#974598";
    document.getElementById("body").style.backgroundColor = "#974598";
    document.getElementById("welcome").style.backgroundColor = "#974598";
    document.getElementById("videos").style.backgroundColor = "#974598";
    document.getElementById("left-side").style.backgroundColor = "#974598";
    document.getElementById("aset").style.backgroundColor = "#974598";
    document.getElementById("gset").style.backgroundColor = "#974598";
    document.getElementById("open").style.backgroundColor = "#974598";
    document.getElementById("bplayer").style.backgroundColor = "#974598";
    document.getElementById("btn_theme").style.borderBottomColor = "#974598";
    document.getElementById("btn_language").style.borderBottomColor = "#974598";
    document.getElementById("btnUpload").style.backgroundColor = "#974598";
    document.getElementById("lblChoose").style.border = "2px solid #974598";
    document.getElementById("lblChoose").style.color = "#974598";
    document.getElementById("bacc").style.backgroundColor = "#1E1E1E";
    document.getElementById("menu").style.backgroundColor = "#1E1E1E";
    document.getElementById("aset").onmouseover = function() {
        this.style.backgroundColor = "#692f6a";
    }
    document.getElementById("aset").onmouseout = function() {
        this.style.backgroundColor = "#974598";
    }
    document.getElementById("gset").onmouseover = function() {
        this.style.backgroundColor = "#692f6a";
    }
    document.getElementById("gset").onmouseout = function() {
        this.style.backgroundColor = "#974598";
    }
    document.getElementById("open").onmouseover = function() {
        this.style.backgroundColor = "#692f6a";
    }
    document.getElementById("open").onmouseout = function() {
        this.style.backgroundColor = "#974598";
    }
    document.getElementById("bplayer").onmouseover = function() {
        this.style.backgroundColor = "#692f6a";
    }
    document.getElementById("bplayer").onmouseout = function() {
        this.style.backgroundColor = "#974598";
    }
    document.getElementById("bacc").onmouseover = function() {
        this.style.backgroundColor = "#692f6a";
    }
    document.getElementById("bacc").onmouseout = function() {
        this.style.backgroundColor = "#974598";
        this.style.backgroundColor = "#1E1E1E";
    }
    document.getElementById("menu").onmouseover = function() {
        this.style.backgroundColor = "#692f6a";
    }
    document.getElementById("menu").onmouseout = function() {
        this.style.backgroundColor = "#974598";
        this.style.backgroundColor = "#1E1E1E";
    }
    document.getElementById("lblChoose").onmouseover = function() {
        this.style.color = "#692f6a";
    }
    document.getElementById("lblChoose").onmouseout = function() {
        this.style.color = "#974598";
    }
    document.getElementById("btnUpload").onmouseover = function() {
        this.style.backgroundColor = "#692f6a";
    }
    document.getElementById("btnUpload").onmouseout = function() {
        this.style.backgroundColor = "#974598";
    }
}