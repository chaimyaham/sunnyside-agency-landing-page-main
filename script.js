burger=document.querySelector(".burger");
line1=document.getElementById("line1");
line2=document.getElementById("line2");
line3=document.getElementById("line3");
nav_items=document.querySelector('.nav-items');

burger.addEventListener('click',()=>{
    line1.classList.toggle("line1");
    line2.classList.toggle("line2");
    line3.classList.toggle("line3");
  
        if(nav_items.style.animation){
            nav_items.style.animation="";
        }else{
        nav_items.style.animation="menu 1s ease forwards"

        }
   

  

})