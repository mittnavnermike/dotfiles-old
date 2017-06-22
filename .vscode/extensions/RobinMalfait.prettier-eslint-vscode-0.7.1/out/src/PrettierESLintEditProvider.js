"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const utils_1 = require("./utils");
class PrettierEditProvider {
    provideDocumentRangeFormattingEdits(document, range, options, token) {
        return [vscode_1.TextEdit.replace(range, utils_1.format(document.getText(range), document.fileName))];
    }
    provideDocumentFormattingEdits(document, options, token) {
        return [vscode_1.TextEdit.replace(utils_1.fullDocumentRange(document), utils_1.format(document.getText(), document.fileName))];
    }
}
exports.default = PrettierEditProvider;
//# sourceMappingURL=PrettierESLintEditProvider.js.map