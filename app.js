const hambergerButton = document.getElementById('hamberger')
const navlist = document.getElementById('nav-list')

function toggleButoon() {
  navlist.classList.toggle('show')
}

hambergerButton.addEventListener('click',toggleButoon)