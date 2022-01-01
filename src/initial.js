
const initialize = () =>{
    const head = document.createElement('div');
    head.classList.add('init-header');
    const title = document.createElement('div');
    title.innerHTML = "Joseph Steak House";
    head.appendChild(title);

    const optionButtons = document.createElement('div');
    optionButtons.classList.add('option-buttons');
    head.appendChild(optionButtons);

    const homeButton = document.createElement('button');
    homeButton.classList.add('home-button');
    const menuButton = document.createElement('button');
    const contactButton = document.createElement('button');

    homeButton.innerHTML = "Home";
    menuButton.innerHTML = "Menu";
    contactButton.innerHTML = "Contact";

    optionButtons.appendChild(homeButton);
    optionButtons.appendChild(menuButton);
    optionButtons.appendChild(contactButton);






    

    document.body.appendChild(head);

}
export default initialize;