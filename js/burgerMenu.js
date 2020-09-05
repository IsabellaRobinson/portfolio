function burgermenu(){ 

    let burgerKnap = document.querySelector(".burger-knap");
    let myNavbar = document.getElementById("myNavBar");
    console.log()

    burgerKnap.addEventListener("click", function(){
      myNavbar.classList.toggle("js-hidden");
    });
    }