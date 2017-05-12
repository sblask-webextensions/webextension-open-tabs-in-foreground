[![Build Status](https://travis-ci.org/sblask/webextension-open-tabs-in-foreground.svg?branch=master)](https://travis-ci.org/sblask/webextension-open-tabs-in-foreground)

# webextension-open-tabs-in-foreground
Clicking a link using the left mouse button while having Ctrl pressed opens it
in a background tab by default. The same when using the middle mouse button.
This extension opens these tabs in the foreground instead. Tabs are only opened
in the background when having Shift pressed while clicking.

You won't need this extension in Firefox as it has a setting for this called
`When you open a link in a new tab, switch to it immediately`, but in Chrome
there is no way to achieve this otherwise.
