import tomaHawk from './images/tomahawk.jpg';
import fillet from './images/fillet.jpg';

const menuTab = () => {
    const menuBoard = document.createElement('div');    
    menuBoard.classList.add('menu-board');

    const title = document.createElement('div');
    title.innerHTML = "Menu";
    title.classList.add('home-title');
    menuBoard.appendChild(title);

    //Adding first item - tomahawk steak
    const firstItem = document.createElement('div');
    firstItem.classList.add('menu-item');
    const firstItemImage = new Image();
    firstItemImage.src = tomaHawk;
    firstItemImage.classList.add('image');
    firstItem.appendChild(firstItemImage);
    const firstItemInfo = document.createElement('div');
    firstItemInfo.innerHTML = 'Juicy Tomahawk Steak';
    firstItemInfo.classList.add('item-info');
    firstItem.appendChild(firstItemInfo);

    menuBoard.appendChild(firstItem);

    //Adding second item - fillet steak
    const secondItem = document.createElement('div');
    secondItem.classList.add('menu-item');
    const secondItemImage = new Image();
    secondItemImage.src = fillet;
    secondItemImage.classList.add('image');
    secondItem.appendChild(secondItemImage);
    const secondItemInfo = document.createElement('div');
    secondItemInfo.innerHTML = 'Juicy Fillet Steak';
    secondItemInfo.classList.add('item-info');
    secondItem.appendChild(secondItemInfo);

    menuBoard.appendChild(secondItem);

    document.body.appendChild(menuBoard);

    return menuBoard;
}



export default menuTab;