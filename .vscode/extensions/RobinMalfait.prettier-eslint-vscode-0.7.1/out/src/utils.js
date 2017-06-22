"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const formatPrettierESLint = require('prettier-eslint');
let statusbar = undefined;
let outputHandler = () => { };
function showStatusBarMessage(message, output) {
    if (statusbar === undefined) {
        statusbar = vscode_1.window.createStatusBarItem();
    }
    outputHandler(output);
    statusbar.text = message;
    statusbar.command = 'prettier-eslint.open-output';
    statusbar.show();
}
function registerOutputHandler(handler = () => { }) {
    outputHandler = handler;
}
exports.registerOutputHandler = registerOutputHandler;
function fullDocumentRange(document) {
    const lastLineId = document.lineCount - 1;
    return new vscode_1.Range(0, 0, lastLineId, document.lineAt(lastLineId).text.length);
}
exports.fullDocumentRange = fullDocumentRange;
function fullDocumentSelection(document) {
    return fullDocumentRange(document);
}
exports.fullDocumentSelection = fullDocumentSelection;
const getPath = (path) => {
    const trimmedPath = path.trim();
    return trimmedPath === ""
        ? undefined
        : trimmedPath;
};
function format(text = '', filePath) {
    try {
        const prettierOptions = vscode_1.workspace.getConfiguration('prettier');
        const prettierEslintOptions = vscode_1.workspace.getConfiguration('prettier-eslint');
        const formattedOutput = formatPrettierESLint({
            text,
            filePath,
            eslintPath: getPath(prettierEslintOptions.eslintPath),
            prettierPath: getPath(prettierEslintOptions.prettierPath),
            prettierOptions
        });
        showStatusBarMessage('Prettier ESLint: $(check)', 'All good!');
        return formattedOutput;
    }
    catch (err) {
        showStatusBarMessage('Prettier ESLint: $(x)', err.toString());
        return text;
    }
}
exports.format = format;
function formatDocument(validLanguages, document, editor) {
    if (!validLanguages.includes(document.languageId)) {
        return Promise.reject('Language is not valid');
    }
    const { selections } = editor;
    const selectionsToBeReplaced = selections.filter((selection) => {
        return !(selection.start.line === selection.end.line
            && selection.start.character === selection.end.character);
    });
    const hasSelections = selectionsToBeReplaced.length > 0;
    if (!hasSelections) {
        selectionsToBeReplaced.push(fullDocumentSelection(document));
    }
    return Promise.all(selectionsToBeReplaced.map((selection) => {
        // Replace selection with new, formatted text
        return editor
            .edit((editBuilder) => editBuilder.replace(selection, format(document.getText(selection), document.fileName)));
    }));
}
exports.formatDocument = formatDocument;
//# sourceMappingURL=utils.js.map