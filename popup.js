function createDOMTree(element, container) {
  const node = document.createElement("div");
  node.className = "node";

  const hasChildren = element.children.length > 0;

  const toggle = document.createElement("span");
  toggle.className = "toggle";
  toggle.textContent = hasChildren ? "▶" : "";

  const tag = document.createElement("span");
  tag.className = "tag";
  tag.textContent = `<${element.tagName.toLowerCase()}>`;

  const header = document.createElement("div");
  header.className = "node-header";
  header.appendChild(toggle);
  header.appendChild(tag);
  node.appendChild(header);

  const childrenContainer = document.createElement("div");
  childrenContainer.className = "children";
  childrenContainer.style.display = "none";

  if (hasChildren) {
    toggle.style.cursor = "pointer";
    toggle.addEventListener("click", () => {
      const isOpen = childrenContainer.style.display === "block";
      childrenContainer.style.display = isOpen ? "none" : "block";
      toggle.textContent = isOpen ? "▶" : "▼";
    });

    for (let child of element.children) {
      createDOMTree(child, childrenContainer);
    }

    node.appendChild(childrenContainer);
  }

  container.appendChild(node);
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
