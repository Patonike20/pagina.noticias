const head = document.getElementsByClassName("head")[0];
const amburguesa = document.getElementsByName("amburguesa")[0];
const menuamburguesa = document.getElementById("amburguesa");
let abierto = false;


const toggleMenu = () =>{
    head.classList.toggle("head2");
    head.style.transition = "transform 0.5s ease-in-out";
}


window.addEventListener("click", funcion(){
    toggleMenu()
})