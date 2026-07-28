chrome.runtime.onMessage.addListener((message, sender) => {
    if (message.name !== "open_link_in_tab" || !sender.tab?.id) {
        return;
    }

    chrome.tabs.create({
        url: message.url,
        active: message.openInForeground,
        openerTabId: sender.tab.id,
    });
});
