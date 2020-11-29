var getIntouchLink = document.getElementById("selectedLink");
document.addEventListener("DOMContentLoaded", function(event) { 
    getIntouchLink.className +=" intouchLink";
});

var tablinks;
$(".navbar-nav a").on('click',function(event){            
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" intouchLink", "");
}

event.currentTarget.className += " intouchLink";
});

