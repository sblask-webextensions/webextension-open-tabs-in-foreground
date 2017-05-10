document.addEventListener("click", (event) => {
    if (event.button === 0 && event.ctrlKey) {
        handleOpenInTabClick(event);
    }
});

document.addEventListener("auxclick", (event) => {
    if (event.button === 1) {
        handleOpenInTabClick(event);
    }
});

function handleOpenInTabClick(event) {
    let anchor = getAnchor(event.target);
    if (!anchor || !anchor.href) {
        return;
    }

    event.preventDefault();

    chrome.runtime.sendMessage(
        {
            name: "open_link_in_tab",
            openInForeground: !event.shiftKey,
            url: anchor.href,
        }
    );
}

function getAnchor(element) {
    if (!element) {
        return undefined;
    }

    if (element.tagName === "A") {
        return element;
    }

    return getAnchor(element.parentNode);
}
