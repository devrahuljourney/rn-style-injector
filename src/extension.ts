import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('rn-style-injector.injectStyles', async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;

    const document = editor.document;
    const text = document.getText();

    const usedStyles = new Set<string>();
    const styleRegex = /styles\.([a-zA-Z0-9_]+)/g;
    let match;
    while ((match = styleRegex.exec(text)) !== null) {
      usedStyles.add(match[1]);
    }

    const styleSheetRegex = /StyleSheet\.create\(\s*{([\s\S]*?)}\s*\)/;
    const matchSheet = text.match(styleSheetRegex);

    if (matchSheet) {
      let original = matchSheet[1];
      let updated = original;

      usedStyles.forEach(style => {
        if (!new RegExp(`\\b${style}\\s*:`).test(original)) {
          updated += `\n  ${style}: {},`;
        }
      });

      const newStyleSheet = `StyleSheet.create({${updated}\n})`;
      const range = new vscode.Range(0, 0, document.lineCount, 0);
      editor.edit(editBuilder => {
        editBuilder.replace(range, text.replace(styleSheetRegex, newStyleSheet));
      });
    } else {
      let newStyles = '';
      usedStyles.forEach(style => {
        newStyles += `  ${style}: {},\n`;
      });

      const insertPos = new vscode.Position(document.lineCount + 1, 0);
      editor.edit(editBuilder => {
        editBuilder.insert(insertPos, `\n\nconst styles = StyleSheet.create({\n${newStyles}});`);
      });
    }

    vscode.window.showInformationMessage("✅ Injected missing styles!");
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
