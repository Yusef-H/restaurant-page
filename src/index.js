import './style.css';
import Icon from './background.jpg';
import initialize from './initial'; 
import homeTab from './home';
import menuTab from './menu';

var hasHome = document.body.querySelector('home-board') != null;
var hasMenu = document.body.querySelector('menu-board') != null;
var hasContact = document.body.querySelector('contact-board') != null;


initialize();

const homeButton = document.querySelector('.home-button');
const menuButton = document.querySelector('.menu-button');

homeButton.addEventListener('click', ()=>{
    hasMenu = document.body.querySelector('.menu-board') != null;
    hasContact = document.body.querySelector('contact-board') != null;
    hasHome = document.body.querySelector('.home-board') != null;

    if(hasMenu || hasHome || hasContact){
        document.body.removeChild((document.body).lastChild);
    }
    
    homeTab();
})
menuButton.addEventListener('click', ()=>{
    hasMenu = document.body.querySelector('.menu-board') != null;
    hasContact = document.body.querySelector('.contact-board') != null;
    hasHome = document.body.querySelector('.home-board') != null;
    if(hasHome || hasContact || hasMenu){
        document.body.removeChild((document.body).lastChild);
    }
    menuTab();
})






function initCheckers(){
    var hasHome = document.body.querySelector('home-board') != null;
    var hasMenu = document.body.querySelector('menu-board') != null;
    var hasContact = document.body.querySelector('contact-board') != null;
    return {hasHome, hasMenu, hasContact};
}



