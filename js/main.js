
$(document).ready(function () {

  const phoneMask = ["+7 (999) 999-99-99"]

  const burgerBtn = document.getElementById("burger");
  const headerTop = document.getElementById("header-top");

  burgerBtn.onclick = () => {
    burgerBtn.classList.toggle("is-active");
    headerTop.classList.toggle("header__top--popup");
    document.body.style.overflowY = "hidden";
  };

  $('#phone-cta').inputmask({ mask: phoneMask }); 
  $('#phone-feedback').inputmask({ mask: phoneMask }); 
});


