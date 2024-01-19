const burgerBtn = document.getElementById('burger');
const headerTop = document.getElementById('header-top')


burgerBtn.onclick = () => {
  burgerBtn.classList.toggle('is-active');
  headerTop.classList.toggle('header__top--popup')
  document.body.style.overflowY = 'hidden'
}