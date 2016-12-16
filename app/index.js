$(document).ready(function(){
  $(".toggle-sidebar").click(function(e){
    e.stopImmediatePropagation();
    $("aside").toggleClass("show");
    $(".aside-logo").toggleClass("show-aside-logo");
    $("#overlay").toggleClass("overlay");
  });

  $("#overlay").click(function(e){
    e.stopImmediatePropagation();
    $("aside").toggleClass("show");
    $(".aside-logo").toggleClass("show-aside-logo");
    $("#overlay").toggleClass("overlay");
  });
});
