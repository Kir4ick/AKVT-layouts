let menu_button = document.getElementById("mobile-menu");
let menu_aside = document.getElementById("sidbar");

menu_button.addEventListener('click', e => {
  console.log(menu_aside);
  menu_aside.classList.toggle("-translate-x-full");
});

