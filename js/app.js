let menu = document.getElementById('burger')
let sidebar = document.getElementById('sidebar')
let bodyLock = document.querySelector('body')
let subMenu = document.querySelector(".header__menu-sub");
let subMenuMobile = document.querySelector(".header__menu-sub-mobile");

menu.addEventListener('click', () => {
  sidebar.classList.toggle('active')
  bodyLock.classList.toggle('lock')
})

subMenu.addEventListener('click', () => {
  subMenu.classList.toggle('clicked')
})

subMenuMobile.addEventListener('click', () => {
  subMenuMobile.classList.toggle('clicked')
})