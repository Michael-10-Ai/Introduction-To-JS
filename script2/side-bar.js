const sidebar = document.querySelector('.sidebar')
const togglebutton = document.querySelector(".sidebar-toggle")
const closebtn = document.querySelector('.close-btn')

togglebutton.addEventListener('click', () => {

    sidebar.classList.add("show-sidebar")

})

closebtn.addEventListener('click', () => {

    sidebar.classList.remove("show-sidebar")

})