const menuBox = document.querySelector('aside');
menuBox.style.left = "-200%";
function showMenu() {
  
  if (menuBox.style.left === "-200%") {
    menuBox.style.left = "0px";
  } 
  
  else if (menuBox.style.left === "0px") {
    menuBox.style.left = "-200%";
  }
}

//Dark Mode

function dark() {
  var element = document.body;
  element.classList.toggle("body");
}