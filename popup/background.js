let pageActionTitle = chrome.i18n.getMessage("pageActionTitle");
chrome.tabs.onUpdated.addListener(
    function (a, b, c) {
        chrome.pageAction.setTitle({
            tabId: a,
            title: pageActionTitle + c.url
        }), chrome.pageAction.setPopup({
            tabId: a,
            popup: "popup.html?text=" + encodeURIComponent(c.url)
        }), chrome.pageAction.show(a)
    }), chrome.pageAction.onClicked.addListener(function (a) {
    chrome.runtime.sendMessage({
        theTextToQRCode: a.url,
        type: "location"
    })
});