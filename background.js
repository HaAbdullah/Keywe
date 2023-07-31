function handleMessage(request, sender, sendResponse) {
    // Do something with the message if needed
  }
  
  chrome.runtime.onMessage.addListener(handleMessage);
  