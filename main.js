const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

//get value (true/false) from session storage. add/remove class
localStorage.getItem('mobileMenuHidden') ? menu.classList.add("hidden") : menu.classList.remove("hidden");

btn.addEventListener("click", ()=>{
  menu.classList.toggle("hidden");
  //set value (true/false) in session storage. 
  localStorage.setItem('mobileMenuHidden', menu.classList.contains("hidden"))
});

const body = document.querySelector('body');
const button = document.querySelector('#darkbutton');
function toggleDark() {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    localStorage.setItem("theme", "light");
  } else {
    body.classList.add('dark');
    localStorage.setItem("theme", "dark");
  }
}

if (localStorage.getItem("theme") === "dark") {
  body.classList.add('dark');
}

document.querySelector('#darkbutton').addEventListener('click', toggleDark);
