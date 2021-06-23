import './sass/main.scss';
import menuCards from './templates/menu-card.hbs';
import menu from './menu.json';

const menuListRef = document.querySelector('.js-menu');
menuListRef.insertAdjacentHTML('beforeend', menuCards(menu));

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector("body");
const themeswitchRef = document.querySelector("#theme-switch-toggle");
console.log(menuCards);
themeswitchRef.addEventListener("change", onChangeThemes);
getThemeFromLocalStorage();

function onChangeThemes()
{   //Удаление класса
    for (const el of Object.values(Theme)) {
    if (bodyRef.classList.contains(el)) {
        bodyRef.classList.remove(el);
    }
  }
    const activeTheme = themeswitchRef.checked ? Theme.DARK : Theme.LIGHT;
    bodyRef.classList.add(activeTheme);
    localStorage.setItem('Theme', activeTheme);
}

function getThemeFromLocalStorage ()  {
  const localStorageTheme = localStorage.getItem('Theme');

    if (localStorageTheme === Theme.DARK) {
     themeswitchRef.checked = true;
     onChangeThemes();
  }
};


