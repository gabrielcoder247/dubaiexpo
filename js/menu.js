const hamburgerBtn = document.getElementById('menu-harmbuger');
const mainContainer = document.querySelector('.mobile-only');
const main = document.querySelector('main');
const modalMenu = document.querySelector('.modal-container');
const closebutton = document.getElementById('modal-harmburger');

// Open modal
const openModal = () => {
    mainContainer.style.display = 'none';
    main.style.display = 'none';
    modalMenu.style.display = 'block';
};

hamburgerBtn.addEventListener('click', openModal);

// Close modal
const closeModal = () => {
    mainContainer.style.display = 'block';
    main.style.display = 'block';
    modalMenu.style.display = 'none';
};

closebutton.addEventListener('click', closeModal);

// Tap on menu buttons
const listItem = document.querySelectorAll('.menu-btn');
listItem.forEach((item) => {
    item.addEventListener('click', closeModal);
});