function goToContactUs() {
  window.location.href = "/contactUs.html";
}

function goToContactUsUI() {
  window.location.href = "/uideveloperPosition.html";
}


function goToContactUsQC() {
  window.location.href = "/qualitycontrolPosition.html";
}


function goToContactUsBE() {
  window.location.href = "/backendPosition.html";
}

function getCurrentYear(){
  var addPlusesYear = document.getElementById("add-pluses-year");
  var date = new Date();
  var year = date.getFullYear();
  addPlusesYear.innerHTML = "© "+year+ " Add pluses";
}
getCurrentYear();

var applySelected = "";
$('.applyButton').on('click', function(event){  
  if(event.currentTarget.id == "applyUI"){
    applySelected = "UI";
  }
  else if(event.currentTarget.id == "applyAccountManager"){
    applySelected = "QC";
  }
  else if(event.currentTarget.id == "applyBackend"){
    applySelected = "BE";
  }
  else if(event.currentTarget.id == "applySystemAdmin"){
    applySelected = "systemAdmin";
  }
  else if(event.currentTarget.id == "applyFullStack"){
    applySelected = "fullStack"
  }
  selectPosition(applySelected);
});


function selectPosition(pos){
    window.location.href = "/contactUs.html?position="+pos;
}

//slider in home page
$('#myCarousel').carousel({
  interval: 2000,
  cycle: true
});        


