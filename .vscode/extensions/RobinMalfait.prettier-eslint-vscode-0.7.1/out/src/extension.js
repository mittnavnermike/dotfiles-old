'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const commands_1 = require("./commands");
const PrettierESLintEditProvider_1 = require("./PrettierESLintEditProvider");
const VALID_LANG = ['javascript', 'javascriptreact'];
function activate(context) {
    const editProvider = new PrettierESLintEditProvider_1.default();
    const disposables = [
        // Register all content providers
        vscode_1.languages.registerDocumentRangeFormattingEditProvider(VALID_LANG, editProvider),
        vscode_1.languages.registerDocumentFormattingEditProvider(VALID_LANG, editProvider),
        // Register all commands
        commands_1.registerPrettierESLintCommand(VALID_LANG),
        commands_1.registerPrettierESLintCommandOutput(),
    ];
    context.subscriptions.push(...disposables);
}
exports.activate = activate;
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map