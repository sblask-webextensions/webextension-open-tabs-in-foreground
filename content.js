document.addEventListener("click", handleCtrlLeftClick, true);
document.addEventListener("auxclick", handleMiddleClick, true);

function handleCtrlLeftClick(event) {
    if (event.button === 0 && event.ctrlKey) {
        handleOpenInTabClick(event);
    }
}

function handleMiddleClick(event) {
    if (event.button === 1) {
        handleOpenInTabClick(event);
    }
}

function handleOpenInTabClick(event) {
    const anchor = getAnchor(event.target);
    if (!anchor || !anchor.href) {
        return;
    }

    event.stopImmediatePropagation();
    event.stopPropagation();
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
