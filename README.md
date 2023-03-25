KeyWe README
============

KeyWe is a Chrome extension that allows users to open websites with code-words. This README provides documentation for the code files included in this project.

Files
-----

### manifest.json

The `manifest.json` file is a configuration file for the Chrome extension. It includes information such as the extension's name, description, version, and background and content scripts. The file also defines the browser action and icons used for the extension.

### content.js

The `content.js` file is a JavaScript file that runs on every page the user visits. It listens for a secret key (`) and then listens for additional keys to form a code-word. When the user presses Enter, the code-word is compared to a list of predefined categories. If the code-word matches a category, KeyWe opens all the websites associated with that category in separate tabs.

### popup.css

The `popup.css` file contains the styling for the extension's popup. It defines the background color, font family, and other styles for the popup's elements.

### popup.html

The `popup.html` file is the HTML file for the extension's popup. It contains a select element for the user to choose a category and a button to open the websites associated with the selected category.

### popup.js

The `popup.js` file is the JavaScript file that controls the popup's behavior. It listens for the user to click the "Open" button and then retrieves the selected category's value. The selected category value is then passed to the `openWebsites` function, which opens all the websites associated with the category.

How to Use
----------

To use KeyWe, install the extension and click on the KeyWe icon in the browser toolbar. The popup will appear, allowing you to select a category and open the associated websites. Press the secret key (`) to activate KeyWe on any webpage and type the code-word for the desired category. Press Enter to open all the websites associated with the category.

Future Improvements
-------------------

In the future, we plan to add the ability to customize the code-words and associated websites. We also plan to add more categories and websites to the predefined lists.
