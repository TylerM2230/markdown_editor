function updatePreview() {
  let previewElement = document.getElementById("preview");
  let editorValue = document.getElementById("editor").value;
  previewElement.innerHTML = marked.parse(editorValue);
}

function setDefault() {
  let previewElement = document.getElementById("preview");
  let editorView = document.getElementById("editor");
  const defaultText = `\
# This is an H1 heading
## This is an H2 heading
** This is Bolded Text **
`;
  previewElement.innerHTML = marked.parse(defaultText);
  editorView.value = defaultText;
}
