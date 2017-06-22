"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const utils_1 = require("./utils");
exports.registerPrettierESLintCommand = (validLanguages) => {
    return vscode_1.commands.registerCommand('prettier-eslint.format', () => {
        utils_1.formatDocument(validLanguages, vscode_1.window.activeTextEditor.document, vscode_1.window.activeTextEditor);
    });
};
exports.registerPrettierESLintCommandOutput = () => {
    const outputChannel = vscode_1.window.createOutputChannel('Prettier ESLint');
    utils_1.registerOutputHandler((output) => {
        outputChannel.clear();
        outputChannel.append(output);
    });
    return vscode_1.commands.registerCommand('prettier-eslint.open-output', () => {
        outputChannel.show();
    });
};
//# sourceMappingURL=commands.js.map