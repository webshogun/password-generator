const stylesheet = document.getElementById('theme');
let selectedTheme = localStorage.getItem('theme');

function setTheme(theme) {
  stylesheet.setAttribute('href', `styles/${theme}-theme.css`);
}

setTheme(selectedTheme);

function themeHandler() {
  selectedTheme = selectedTheme === 'dark' ? 'light' : 'dark';
  setTheme(selectedTheme);
  localStorage.setItem('theme', selectedTheme);
}

function copyHandler(id) {
  const copy = document.getElementById(id);
  navigator.clipboard.writeText(copy.value);
}
