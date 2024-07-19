const burger = document?.querySelector('[data-burger]')
const menu = document?.querySelector('[data-menu]')
const body = document.body

burger?.addEventListener('click', () => {
  body.classList.toggle('stop-scroll')
  // burger?.classList.toggle('burger--active')
  burger?.classList.toggle('header__burger--active')
  menu?.classList.toggle('header__burger-menu--visible')
})
