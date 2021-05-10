import menuTemplate from './templates/menu-template.hbs';
import menu from './menu.json';
import './styles.css';

const menuContainer = document.querySelector('.js-menu');
const menuMarkup = createProductCards(menu);
menuContainer.insertAdjacentHTML('beforeend', menuMarkup);

function createProductCards(card){
return card.map(menuTemplate).join('');
}

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const switcher = document.querySelector("#theme-switch-toggle");
const localStorageTheme = localStorage.getItem('theme');
document.body.classList.add(Theme.LIGHT);

if (localStorageTheme){
    document.body.classList.add(localStorageTheme);
}

if (localStorageTheme === Theme.DARK){
    switcher.checked = true;
}

function clickOnSwitcher(e){
    if(e.currentTarget.checked){
        document.body.classList.remove(Theme.LIGHT);
        document.body.classList.add(Theme.DARK);
        localStorage.setItem('theme', Theme.DARK);
    }else{
        document.body.classList.remove(Theme.DARK);
        document.body.classList.add(Theme.LIGHT);
        localStorage.setItem('theme', Theme.LIGHT);
    }
}

switcher.addEventListener("click", clickOnSwitcher);