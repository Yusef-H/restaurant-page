import './style.css';
import Icon from './background.jpg';
import initialize from './initial'; 
import homeTab from './home';

initialize();

const homeButton = document.querySelector('.home-button');

homeButton.addEventListener('click', ()=>{
    homeTab();
})








