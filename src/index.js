import './sass/main.scss';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector("body");
const themeswitchRef = document.querySelector("#theme-switch-toggle");
localStorage.setItem('Theme', 'LIGHT');

themeswitchRef.addEventListener("change", onChangeThemes);

function onChangeThemes()
{
    localStorage.setItem('Theme', 'DARK');
    bodyRef.classList.toggle(theme);
}

