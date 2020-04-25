/* Javascript for 02 User Characteristics - Affinity Diagram */

/* Cleaner Code */
$(document).ready(function(){

  $("[class*='hover-']").mouseover(function(){
    var c = $(this).attr("class");
    $("." + c).addClass("hovercolumn");
  })

    $("[class*='hover-']").mouseout(function(){
    $("[class*='hover-']").removeClass("hovercolumn");
  })

})

/* Old Code
$(document).ready(function(){

  $("[class*='hover-']").mouseover(function(){
    var c = $(this).attr("class");
    var x = document.getElementsByClassName(c);
    for (var i = 0; i < x.length; i++) {
      $(x[i]).addClass("hovercolumn");
    }
  })

    $("[class*='hover-']").mouseout(function(){
    var c = $(this).attr("class");
    var x = document.getElementsByClassName(c); 
    for (var i = 0; i < x.length; i++) {
      $(x[0]).removeClass("hovercolumn");
    }
  })
})*/