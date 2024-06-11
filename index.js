const bgmenu = document.querySelector('.bgmenu');
const liens = document.querySelector('.liens');

bgmenu.addEventListener('click', () => {
    liens.classList.toggle('mobile');
});