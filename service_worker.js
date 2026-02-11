chrome.runtime.onMessage.addListener((message) => {
    chrome.tabs.query(
        {
            active: true,
            currentWindow: true,
        },
        (tabs) => {
            chrome.tabs.create(
                {
                    url: message.url,
                    active: message.openInForeground,
                    openerTabId: tabs[0].id,
                }
            );
        }
    );
});
