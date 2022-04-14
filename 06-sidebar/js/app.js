const getElement = (selector) => {
  const el = document.querySelector(selector)
  if (el) return el
  throw new Error(`Please check your classes : ${selector} does not exist`)
}

const sidebarToggle = getElement('.sidebar__toggle-btn')
const sidebar = getElement('.sidebar')
const closeBtn = getElement('.sidebar__close-btn')

sidebarToggle.addEventListener('click', function () {
  sidebar.classList.toggle('show-sidebar')
})

closeBtn.addEventListener('click',()=>{
  sidebar.classList.remove('show-sidebar')

})