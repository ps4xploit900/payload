function ani2(){
 document.getElementById('notify').className = 'notification2'
 setTimeout(hide, 400)
}
function hide(){
 document.getElementById('notify').style.display = 'none'
}

function awaitpl2(){
	    document.getElementById('notify').style.display = ''
	    document.getElementById('notify').className = 'notification'
      setTimeout(function(){document.getElementById('log').innerHTML ='<h1 style=color:#ebfa89>*Loading Binloader...</h1>'; }, 50);
      setTimeout(function(){document.getElementById("log").innerHTML="<h1 style=color:#ebfa89>"+LoadedMSG+"</h1>"; }, 800);
      setTimeout(ani2, 4000);

}

function awaitpl(){
	    document.getElementById('notify').style.display = ''
	    document.getElementById('notify').className = 'notification'
      setTimeout(function(){document.getElementById('log').innerHTML ='<h1 style=color:#ebfa89>★ Sending ...<br>Payload</h1>'; }, 50);
      setTimeout(function(){document.getElementById("log").innerHTML="<h1 style=color:#ebfa89>"+LoadedMSG+"</h1>"; }, 800);
      setTimeout(ani2, 4000);
}

function load_exploit(){
    document.getElementById('notify').style.display = ''
    document.getElementById('notify').className = 'notification'
    setTimeout(function(){document.getElementById('log').innerHTML ='<h1 style=color:#ebfa89;>&nbsp;&nbsp;★ Loading Xploit + Payloads<br><br>Please Wait ...</h1>'; }, 50);
    setTimeout(webkitExploit,1000);
}

function load_exploit_done(){
    document.getElementById('notify').style.display = ''
    document.getElementById('notify').className = 'notification'
    setTimeout(function(){document.getElementById('log').innerHTML ='<h1 style=color:#ebfa89><br>*Jailbreak Loaded !!!</h1>'; }, 50);
    setTimeout(loadHomeBrew, 100);

}

// Added AutoHEN
function loadHomeBrew() {
    var firstscheck = localStorage.getItem("CheckBOX1")
    var secondscheck = localStorage.getItem("CheckBOX2")
    if (firstscheck == "true"){
        setTimeout(load_platinum, 100)
    }else if(secondscheck == "true") {
        setTimeout(load_goldhen2b2, 100)
    }else {
        document.getElementById('notify').style.display = ''
        document.getElementById('notify').className = 'notification'
        setTimeout(function(){document.getElementById('log').innerHTML ='<h1 style=color:#ebfa89;padding-top:7px;>★ Jailbreak Done!<br> Select Payload Manually! ★</h1>'; }, 50);
        setTimeout(ani2, 4000);
    }
}

function autopl(){
	    document.getElementById('notify').style.display = ''
	    document.getElementById('notify').className = 'notification'
      setTimeout(function(){document.getElementById("log").innerHTML="<h1 style=color:#ebfa89>"+LoadedMSG+"</h1>"; }, 100);
      setTimeout(ani2, 2000);
}

function load_bin(){
LoadedMSG="Send A Payload To Port 9020 Now !!!";
runBinLoader();

}

function load_goldhen224(){
LoadedMSG="Done!<br>★GoldHEN v2.2.4 Loaded !!!";
PLfile = "goldhen224.bin";
toogle_payload();
}

function load_goldhen23(){
LoadedMSG="Done!<br>★GoldHEN v2.3 Loaded !!!";
PLfile = "goldhen23.bin";
toogle_payload();
}

function load_goldhen222(){
LoadedMSG="Done!<br>★GoldHEN v2.2.2 Loaded !!!";
PLfile = "goldhen222.bin";
toogle_payload();
}

function load_goldhen212(){
LoadedMSG="Done!<br>★GoldHEN v2.1.2 Loaded !!!";
PLfile = "goldhen212.bin";
toogle_payload();
}

function load_goldhen2b2(){
LoadedMSG="Done!<br>★GoldHEN v2.0B2 Loaded !!!";
PLfile = "goldhen2b2.bin";
toogle_payload();
}

function load_disableupdates(){
LoadedMSG="Done!<br>Disable Updates Loaded !!!";
PLfile = "disableupdates.bin";
toogle_payload();
}
function load_basichen(){
LoadedMSG="Done!<br>★Basic HEN Loaded !!!";
PLfile = "basichen.bin";
toogle_payload();
}
function load_enableftp(){
LoadedMSG="Done!<br>Enable FTP Loaded !!!";
PLfile = "enableftp.bin";
toogle_payload();
}
function load_app2usb(){
LoadedMSG="Done!<br>Enable App 2 USB !!!";
PLfile = "app2usb.bin";
toogle_payload();
}
function load_webrte900(){
LoadedMSG="Done!<br>Enable WebRTE !!!";
PLfile = "webrte900.bin";
toogle_payload();
}
function load_OrbisToolbox(){
LoadedMSG="Done!<br>Enable Orbis Toolbox !!!";
PLfile = "OrbisToolbox.bin";
toogle_payload();
}
function load_backup(){
LoadedMSG="Done!<br>Enable DB Backup !!!";
PLfile = "backup.bin";
toogle_payload();
}
function load_restore(){
LoadedMSG="Done!<br>Enable Restore Backup !!!";
PLfile = "restore.bin";
toogle_payload();
}
function load_pkgbackup(){
LoadedMSG="Done!<br>Enable PKG Backup !!!";
PLfile = "pkgbackup.bin";
toogle_payload();
}
function load_linux1gb(){
LoadedMSG="Done!<br>Enable Linux 1GB !!!";
PLfile = "linux1gb.bin";
toogle_payload();
}
function load_linux2gb(){
LoadedMSG="Done!<br>Enable Linux 2GB !!!";
PLfile = "linux2gb.bin";
toogle_payload();
}
function load_linux3gb(){
LoadedMSG="Done!<br>Enable Linux 3GB !!!";
PLfile = "linux3gb.bin";
toogle_payload();
}
function load_linux4gb(){
LoadedMSG="Done!<br>Enable Linux 4GB !!!";
PLfile = "linux4gb.bin";
toogle_payload();
}
function load_linux5gb(){
LoadedMSG="Done!<br>Enable Linux 5GB !!!";
PLfile = "linux5gb.bin";
toogle_payload();
}
function load_dumpergame(){
LoadedMSG="Done!<br>Enable Dumper Game !!!";
PLfile = "dumpergame.bin";
toogle_payload();
}
function load_OystersMenu100(){
LoadedMSG="Done!<br>OystersMenu-v1.3.3-1.00 !!!";
PLfile = "OystersMenu100.bin";
toogle_payload();
}
function load_OystersMenu113(){
LoadedMSG="Done!<br>OystersMenu-v1.3.3-1.13 !!!";
PLfile = "OystersMenu113.bin";
toogle_payload();
}
function load_OystersMenu124(){
LoadedMSG="Done!<br>OystersMenu-v1.3.3-1.24 !!!";
PLfile = "OystersMenu124.bin";
toogle_payload();
}
function load_OystersMenu119(){
LoadedMSG="Done!<br>OystersMenu-v1.3.3-1.19 !!!";
PLfile = "OystersMenu119.bin";
toogle_payload();
}
function load_BeefQueefMod133(){
LoadedMSG="Done!<br>Beef Queef Mod 1.33!!!";
PLfile = "BeefQueefMod133.bin";
toogle_payload();
}
function load_BeefQueefMod134(){
LoadedMSG="Done!<br>Beef Queef Mod 1.34!!!";
PLfile = "BeefQueefMod134.bin";
toogle_payload();
}
function load_BeefQueefMod138(){
LoadedMSG="Done!<br>Beef Queef Mod 1.38!!!";
PLfile = "BeefQueefMod138.bin";
toogle_payload();
}
function load_temperature(){
LoadedMSG="Done!<br>Show Temperature!!!";
PLfile = "temperature.bin";
toogle_payload();
}
function transitionPage(){
    // Hide to left / show from left
    $("#enter").toggle("slide", {direction: "left"}, 500);

    // Show from right / hide to right
    $("#about-2").toggle("slide", {direction: "right"}, 500);
}

$(document).ready(function() {
    $('#enter').click(transitionPage);
    $('#about-2').click(transitionPage);
});

function load_goldhen20b(){
LoadedMSG="Done!<br>★GoldHEN v2.0b Loaded";
PLfile = "goldhen20b.bin";
toogle_payload();
}
