# 🌳 DOM Tree Viewer - Chrome Extension

**DOM Tree Viewer** is a simple and interactive Chrome extension that lets you view the HTML DOM structure of any webpage in a clean, collapsible tree format — just like a code editor's file explorer.

## 🧩 Features

- 🔍 View the full DOM structure of any website
- 🌲 Expand/Collapse nested elements  
- 🧑‍💻 Styled with developer-friendly fonts (`Fira Code`, `Inter`)
- 🖱️ Launch via context menu (right-click → View DOM Tree)
- 🚀 Lightweight and fast

## 📦 Folder Structure

```
dom-tree-extension/
├── manifest.json
├── background.js
├── popup.html
├── popup.css
├── popup.js
├── icon.png
└── README.md
```

## 📥 Installation (Unpacked Extension)

1. Clone or download this repo
2. Open Chrome and go to `chrome://extensions/`
3. Enable **Developer Mode** (top right toggle)
4. Click **Load Unpacked**
5. Select the `dom-tree-extension` folder
6. Right-click on any webpage and click **"View DOM Tree"**

## 💡 Usage

- Right-click on any page → **View DOM Tree**
- A popup will open with a **collapsible tree structure**
- Click the arrow ▶/▼ to expand or collapse any tag
- Scroll to explore the full hierarchy

## 🎨 Styling

- DOM tags are styled in **monospaced code blocks**
- Tree structure uses lines and indentations for clarity
- Fonts used: [`Fira Code`](https://fonts.google.com/specimen/Fira+Code), [`Inter`](https://fonts.google.com/specimen/Inter)

## 🛠️ Technologies

- JavaScript (DOM traversal & rendering)
- HTML5 + CSS3
- Chrome Extension APIs (`scripting`, `contextMenus`, `action`)

## 📸 Preview

![DOM Tree Viewer Screenshot](![image](https://github.com/user-attachments/assets/fc2c4abf-c6a1-4b5a-83a4-b0ec4eef87f7)
)

*Screenshot showing the DOM tree structure in action*

## 🔧 Future Enhancements

- [ ] Show tag `id`, `class`, and text content
- [ ] Add search/filter bar for elements
- [ ] Support dark mode toggle
- [ ] Element highlighting on hover
- [ ] Export DOM structure as JSON/XML

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📃 License

MIT License © 2025

Made with ❤️ by [Shreejay Kurhade](https://github.com/shreejaykurhade)

---

⭐ **Star this repo if you found it helpful!**
