const menuToggle = document.querySelector('.toggle')
const navBar = document.querySelector('.navBar')

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active')
  navBar.classList.toggle('active')
})