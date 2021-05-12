import menuTemplate from './templates/menu-template.hbs';
import menu from './menu.json';
import './styles.css';

const menuContainer = document.querySelector('.js-menu');

const createProductCards = item => 
menuContainer.insertAdjacentHTML('beforeend', menuTemplate(menu));


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
    if(e.currentTarget.checked){
        body.remove(Theme.LIGHT);
        body.add(Theme.DARK);
        localStorage.setItem('theme', Theme.DARK);
    }else{
        body.remove(Theme.DARK);
        body.add(Theme.LIGHT);
        localStorage.setItem('theme', Theme.LIGHT);
    }
}

switcher.addEventListener("click", clickOnSwitcher);