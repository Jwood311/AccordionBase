$(".category").hide();
$(".catTitle").click(function() {
  var id = $(this).data("id");
  var toggle = $(this).data("toggle");
    if(toggle = "open"){
     $("." + id).slideToggle();
     $(this).css("background-color", "#27ae60");
     $(this).attr("data-toggle", "closed");
     changeText(id);
       
    }
  else {
    $("." + id).slideToggle();
    $(this).css("background-color", "#2ecc71");
    $(this).attr("data-toggle", "open");
    changeText(id);
  }   
});

function changeText(id){
    if ($(".indi" + id).text() == "+"){
        $(".indi" + id).text("-");
    } else{
        $(".indi" + id).text("+");
    }
}