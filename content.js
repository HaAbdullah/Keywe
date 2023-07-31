let websiteData = {};

chrome.storage.local.get("websiteData", function (result) {
  websiteData = result.websiteData || {};
});

chrome.runtime.onConnect.addListener(function (port) {});

var code = "";
start();

function start() {
  window.onkeydown = function (event) {
    if (event.key == "`") {
      code = "";
      getKeys();
    }
  };
}

function getKeys() {
  window.onkeydown = function (event) {
    if (event.key == "Enter") {
      pressedEnter();
    } else if (event.key.length == 1) {
      code = code + event.key;
    }
  };
}

function pressedEnter() {
    // Called when enter key is pressed any time after the secret key
    // Uses "code" variable from the previous function to determine which site to redirect user to coded website
    if (code in websiteData) {
      let websites = websiteData[code];
      for (let i = 0; i < websites.length; i++) {
        let url = websites[i].trim();
  
        // Check if the URL starts with "http://" or "https://"
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
          // If not, prepend "http://" before opening
          url = "http://" + url;
        }
  
        window.open(url);
      }
    } else {
      alert("Invalid Code: " + code);
    }
    start();
  }


