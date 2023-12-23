# ChromeExtension (Template)
Chrome Extension Base Template for noobies. Injects a div into any site.

manifest_version:

This indicates the version of the manifest file. In this case, it's version 3, which is the manifest version for Chrome extensions.
name:

The name of the extension. In this case, it's "extension[UTILS]".
description:

A brief description of the extension. It's described as a "base for chrome extensions noobies," suggesting it serves as a foundation for beginners creating Chrome extensions.
version:

The version number of the extension. In this case, it's version 1.0.
icons:

An object that defines icons of different sizes to be used for the extension. These icons are typically displayed in the Chrome browser.
content_scripts:

An array of content scripts that are injected into matching pages. In this case, the script "inject/inject.js" will be injected into web pages that match the specified URL pattern "https:///".
action:

Defines the extension's browser action, which is an icon in the browser's toolbar. It specifies the default icons of different sizes for the extension's action.
update_url:

Specifies the URL where the extension can check for updates. In this case, it's set to the Google Chrome update service URL.
permissions:

An array of permissions that the extension requests. In this case, the extension requests access to "storage" and the "activeTab" permission. "storage" typically allows the extension to store and retrieve data, and "activeTab" allows the extension to interact with the currently active tab.
