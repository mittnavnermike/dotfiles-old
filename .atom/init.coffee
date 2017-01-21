# Your init script
#
# Atom will evaluate this file each time a new window is opened. It is run
# after packages are loaded/activated and after the previous editor state
# has been restored.
#
# An example hack to log to the console when each text editor is saved.
#
# atom.workspace.observeTextEditors (editor) ->
#   editor.onDidSave ->
#     console.log "Saved! #{editor.getPath()}"

# Commenting in jsx
atom.commands.add 'atom-workspace', 'comment-jsx', ->
  atom.config.set('editor.commentStart', '{/*', {scopeSelector: '.source.js.jsx'})
  atom.config.set('editor.commentEnd', '*/}', {scopeSelector: '.source.js.jsx'})
  for selection in atom.workspace.getActiveTextEditor().selections
    selection.toggleLineComments()
  atom.config.unset('editor.commentStart', {scopeSelector: '.source.js.jsx'})
  atom.config.unset('editor.commentEnd', {scopeSelector: '.source.js.jsx'})
