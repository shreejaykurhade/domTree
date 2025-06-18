function createDOMTree(element, container) {
  const nodeElement = document.createElement("div");
  nodeElement.className = "node";

  const tagSpan = document.createElement("span");
  tagSpan.className = "tag";
  tagSpan.textContent = `<${element.tagName.toLowerCase()}>`;
  nodeElement.appendChild(tagSpan);

  container.appendChild(nodeElement);

  const children = element.children;
  for (let i = 0; i < children.length; i++) {
    createDOMTree(children[i], nodeElement);
  }
}

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  chrome.scripting.executeScript({
    target: { tabId: tabs[0].id },
    func: () => document.documentElement.outerHTML
  }, (results) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(results[0].result, "text/html");

    const container = document.getElementById("treeContainer");
    container.innerHTML = "";
    createDOMTree(doc.documentElement, container);
  });
});
