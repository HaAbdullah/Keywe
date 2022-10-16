chrome.runtime.onConnect.addListener(function(port){});3

var code = "";
start();

function start() {
window.onkeydown = function(event) {
    if (event.key == "`") {  
        code = "";
        getKeys()   
    } 
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

const socialsList = ["https://www.instagram.com/", "https://discord.com/channels/@me/", "https://twitter.com/?lang=en"];
const gamesList = ["https://addictinggames.com"];
const videoList = ["https://youtube.com", "https://www.twitch.tv/"];
const streamingList = ["https://www.amazon.com/Prime-Video/b?node=2676882011", "https://www.netflix.com/browse", "https://www.disneyplus.com/login"]


function pressedEnter(){ // future: parse code into window.open to compress code i
    // Called when enter key is pressed any time after the secret key 
    // Uses "code" variable from previous function to determine which site to redirect user to coded website
    let i = 0;

    if (code == "socials"){
        while (i < socialsList.length) {
            window.open(socialsList[i]);
            i++;
            start();
        }
    } 
    else if (code == "games"){
        while (i < gamesList.length) {
            window.open(gamesList[i]);
            i++;
            start();
        } 
    }
    else if (code == "video"){
        while (i < videoList.length) {
            window.open(videoList[i]);
            i++;
            start();
        } 
    }
    else if (code == "streaming"){
        while (i < streamingList.length) {
            window.open(streamingList[i]);
            i++;
            start();
        } 
    }
    else{
        alert("Invalid Code: " + code);
        start();
    }
}

//chrome.runtime.sendMessage(/*ADD JSON OBJECT HERE*/ );