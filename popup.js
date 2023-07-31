document.addEventListener("DOMContentLoaded", function () {
  const codeInput = document.getElementById("code");
  const websitesInput = document.getElementById("websites");
  const saveButton = document.getElementById("saveButton");
  const savedCodesList = document.getElementById("savedCodes");
  const instructionsButton = document.getElementById("instructionsButton");
  const instructionsContainer = document.getElementById("instructionsContainer");

  // Function to update the saved codes list
  function updateSavedCodesList() {
    savedCodesList.innerHTML = "";
    chrome.storage.local.get("websiteData", function (result) {
      const websiteData = result.websiteData || {};
      for (const code in websiteData) {
        const listItem = document.createElement("li");
        listItem.textContent = code + ": " + websiteData[code].join(", ");

        // Add a delete button for each code
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
          // Remove the code from storage and update the list
          delete websiteData[code];
          chrome.storage.local.set({ websiteData }, function () {
            updateSavedCodesList();
          });
        });

        listItem.appendChild(deleteButton);
        savedCodesList.appendChild(listItem);
      }
    });
  }

  // Load saved codes on popup open
  updateSavedCodesList();

  saveButton.addEventListener("click", function () {
    const code = codeInput.value.trim();
    const websites = websitesInput.value.split("\n").map((url) => url.trim());

    if (code && websites.length > 0) {
      chrome.storage.local.get("websiteData", function (result) {
        const websiteData = result.websiteData || {};
        websiteData[code] = websites;
        chrome.storage.local.set({ websiteData }, function () {
          alert("Code word and websites saved successfully!");
          codeInput.value = "";
          websitesInput.value = "";

          // Update the saved codes list after saving
          updateSavedCodesList();
        });
      });
    } else {
      alert("Please enter valid code word and websites!");
    }
  });

  // Function to show/hide the instructions
  function toggleInstructions() {
    if (instructionsContainer.style.display === "none") {
      instructionsContainer.style.display = "block";
    } else {
      instructionsContainer.style.display = "none";
    }
  }

  // Add event listener for instructions button click
  instructionsButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default behavior of opening a new tab
    toggleInstructions();
  });
});
