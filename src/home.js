const homeTab = () => {
    const board = document.createElement('div');
    board.classList.add('home-board');

    const title = document.createElement('div');
    title.innerHTML = "The best Steak House in the country! <br> Juicy and Delicious steaks cooked on coal";
    title.classList.add('home-title');
    board.appendChild(title);
    document.body.appendChild(board);
}
export default homeTab;