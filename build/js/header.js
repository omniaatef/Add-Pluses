var getIntouchLink = document.getElementById("selectedLink");
if(getIntouchLink){
    document.addEventListener("DOMContentLoaded", function(event) { 
        getIntouchLink.className +=" intouchLink";
    });
}

var tablinks;
$(".navbar-nav a").on('click',function(event){            
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" intouchLink", "");
}

event.currentTarget.className += " intouchLink";
});


window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


