//creamos 
window.onscroll= function(){
    scroll=document.docuementElement.scrollTop;

    header = document.getElementById("header");

    if(scroll>20){
    header.classList.add('nav_mod')
    }
}