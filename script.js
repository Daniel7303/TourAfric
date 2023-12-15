function toggleNav() {
  var nav = document.querySelector('ul');
  nav.style.display = (nav.style.display === 'none' || nav.style.display === '') ? 'flex' : 'none';
}
function toggleDropDown() {
  const logDown = document.querySelector('.logout')
  logDown.style.display = logDown.style.display == "block" ? "none" : "block"

}
