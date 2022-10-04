chrome.runtime.onConnect.addListener(function(port){});3

var code = "";

window.onkeydown = function(event) {
    if (event.key == "`") {  
        getKeys()
    } 
}


function getKeys() {
    window.onkeydown = function(event) {
        if (event.key == "Enter") {
            pressedEnter() 
        } else if (event.key.length == 1){
            code = code + event.key
        }   
    }
}

function pressedEnter(){ 
    // Called when enter key is pressed any time after the secret key 
    // Uses "code" variable from previous function to determine which site to redirect user to coded website
    // 

    if (code == "games"){
        window.open("https://addictinggames.com");
    } 
    else if (code == "video"){
        window.open("https://youtube.com"); 
    }
    else if (code == "socials"){
        window.open("https://www.instagram.com/"); 
        window.open("https://discord.com/channels/@me/");
    }
    else if (code == "library"){
        window.open("https://miss.ent.sirsidynix.net/client/en_CA/mlsathome/"); 
    }
    else{
        alert("Invalid Code: " + code);
    }
}

//chrome.runtime.sendMessage(/*ADD JSON OBJECT HERE*/ );