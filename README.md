# 🍎 Web-based macOS (macOS UI Clone)

A macOS-inspired **web operating system** built using **React + Vite**, replicating core macOS UI concepts such as Dock, draggable windows, Finder-like navigation, Notes app, and system-style interactions — all inside the browser.

🔗 **Live Demo:**  
https://sujal0018.github.io/Web-based-MacOs/

---

## ✨ Features

- 🪟 **Draggable & Resizable Windows**
- 🚢 **macOS-style Dock**
- 📁 **Finder-like File Explorer (Virtual File System)**
- 📝 **Notes App with Auto-save**
- 💻 **Terminal / CLI Emulator**
- 🎵 **Spotify UI Window**
- 📄 **Resume Viewer**
- 📧 **Gmail Compose Integration (Contact via Dock)**
- 💾 **Persistent State using LocalStorage**
- 📱 **Responsive Design**

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite
- **Styling:** SCSS (Sass)
- **Window Management:** react-rnd
- **State Management:** React Hooks
- **Persistence:** LocalStorage
- **Deployment:** GitHub Pages

---

## 🧠 Architecture Overview

```text
Dock → Window State → MacWindow
           ↓
     Individual Apps
 (Finder, Notes, GitHub, CLI, etc.)
