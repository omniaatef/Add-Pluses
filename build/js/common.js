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
// var applySelected = "";
// $('.applyButton').on('click', function(event){  
//   if(event.currentTarget.id == "applyUI"){
//     applySelected = "UI";
//   }
//   else if(event.currentTarget.id == "applyAccountManager"){
//     applySelected = "QC";
//   }
//   else{
//     applySelected = "BE";
//   }
//   selectPosition(applySelected);
// });


// function selectPosition(pos){
//     window.location.href = "/contactUs.html";
//     if(pos == "UI"){
//       document.getElementById("applyingPostion").selected = "true";
//       $(".positionForm").css('display', 'block');
//       $(".projectForm").css('display', 'none');
//       $(".otherForm").css('display', 'none');
//       document.getElementById("uiDev").selected = "true";
//     }
//     else if(pos == "QC"){
//       console.log('select', pos);

//       document.getElementById("accountManag").selected = "true";
//     }
//     else{
//       document.getElementById("backendDev").selected = "true";
//     }
// }
