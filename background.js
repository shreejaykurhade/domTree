chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "viewDomTree",
    title: "View DOM Tree",
    contexts: ["all"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "viewDomTree") {
    chrome.action.openPopup();
  }
});
