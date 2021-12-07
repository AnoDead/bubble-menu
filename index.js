let menu_items = document.querySelectorAll(".menu__item");

function activeLink(){
  menu_items.forEach( (item) => item.classList.remove("active"));
  this.classList.add("active");
}

menu_items.forEach((item)=> item.addEventListener('click', activeLink));