$(document).ready(function(){
  $(".toggle-sidebar").click(function(e){
    e.stopImmediatePropagation();
    $("aside").toggleClass("show");
    $("#overlay").toggleClass("overlay");
  });

  $("#overlay").click(function(e){
    e.stopImmediatePropagation();
    $("aside").toggleClass("show");
    $("#overlay").toggleClass("overlay");
  });
});
