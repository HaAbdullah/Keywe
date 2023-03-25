document.addEventListener("DOMContentLoaded", function() {
    var submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", function() {
      var category = document.getElementById("category").value;
      openWebsites(category);
    });
  });
  
  function openWebsites(category) {
    var websites = [];
    switch (category) {
      case "socials":
        websites = ["https://www.instagram.com/", "https://discord.com/channels/@me/", "https://twitter.com/?lang=en"];
        break;
      case "games":
        websites = [];
        break;
      case "video":
        websites = ["https://youtube.com", "https://www.twitch.tv/"];
        break;
      case "streaming":
        websites = ["https://www.amazon.com/Prime-Video/b?node=2676882011", "https://www.netflix.com/browse", "https://www.disneyplus.com/login"];
        break;
    }
    for (var i = 0; i < websites.length; i++) {
      window.open(websites[i]);
    }
    window.close();
  }
