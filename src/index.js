import menuTemplate from './templates/menu-template.hbs';
import menu from './menu.json';
import './styles.css';

const menuContainer = document.querySelector('.js-menu');

const createProductCards = item => 
menuContainer.insertAdjacentHTML('beforeend', menuTemplate(item));
createProductCards(menu); 



const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const switcher = document.querySelector("#theme-switch-toggle");
const localStorageTheme = localStorage.getItem('theme');
const body = document.body.classList;

body.replace(Theme.LIGHT, Theme.DARK);

if (localStorageTheme){
    body.add(localStorageTheme);
}

if (localStorageTheme === Theme.DARK){
    switcher.checked = true;
}

function clickOnSwitcher(e){
    body.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);

    if(!e.currentTarget.checked){
        body.replace(Theme.DARK,Theme.LIGHT);
        localStorage.setItem('theme', Theme.LIGHT);}
    }


switcher.addEventListener("click", clickOnSwitcher);