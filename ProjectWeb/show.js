$(document).ready(function() {
    $('.dropdown-content').hide();
});

$(document).ready(function() {
    $(".dropdown").hover(function(){
        $('.dropdown-content').show();
    },function(){
        $('.dropdown-content').hide();
    });
});

function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}