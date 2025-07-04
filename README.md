﻿# React Native Style Injector

A lightweight VS Code extension that automatically injects missing `styles.xyz` entries into the `StyleSheet.create()` block in React Native files.

---

## ✨ Features

- Detects any `styles.xyz` used in your JSX
- Adds missing style keys to the `StyleSheet.create()` block
- Avoids duplicates
- Works in `.js`, `.jsx`, and `.tsx` files
- Supports custom keyboard shortcut (like `Alt + S`)

---

## 🔧 How to Install (.vsix file)

If the extension is not in the Marketplace, follow these steps:

1. Download the file: `rn-style-injector-0.0.1.vsix`
2. Open **Visual Studio Code**
3. Press `Ctrl + Shift + X` to open the **Extensions Panel**
4. Click the `...` (3-dot menu) in the top-right corner
5. Select **Install from VSIX...**
6. Choose the `rn-style-injector-0.0.1.vsix` file from your system

✅ The extension will now be installed and ready to use.

---

## 🚀 How to Use

1. Open any React Native file like `App.js`, `MyComponent.jsx`, or `Home.tsx`
2. Use inline JSX with styles like:

   ```jsx
   <View style={styles.container} />
   <Text style={styles.title} />
Press Ctrl + Shift + P to open the Command Palette

Type:

mathematica
Copy
Edit
Inject Missing React Native Styles
Press Enter

✅ This will automatically add the missing keys to your StyleSheet.create({}) block:

const styles = StyleSheet.create({
  container: {},
  title: {}
});


⌨️ Optional: Add Keyboard Shortcut (Alt + S)
To make it even faster, bind the command to a keyboard shortcut:

📌 One-Time Setup:
Press: Ctrl + K Ctrl + S → opens the Keyboard Shortcuts window

In the search bar, type:

Inject Missing React Native Styles
You’ll see the command from this extension

Click the 🖉 pencil icon next to it

Press Alt + S on your keyboard

Press Enter to save the shortcut

✅ Now you can just press Alt + S in any .js, .jsx, or .tsx file to inject styles instantly.

💡 Example Before and After
✅ Before:

<View style={styles.box} />
✅ After pressing Alt + S:

const styles = StyleSheet.create({
  box: {}
});


💬 Support or Feedback
If you face any issues or have suggestions, open an issue on GitHub:
👉 https://github.com/devrahuljourney/rn-style-injector/issues

📁 Source Code
GitHub: [https://github.com/devrahuljourney/rn-style-injector
](https://github.com/devrahuljourney/rn-style-injector)
🙌 Made by Rahul
Built with ❤️ to save React Native developers from repetitive typing.


[![Visual Studio Marketplace](https://img.shields.io/visual-studio-marketplace/v/your-publisher-name.react-native-style-injector)](https://marketplace.visualstudio.com/items?itemName=your-publisher-name.react-native-style-injector)
