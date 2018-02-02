
function showpopup()
{
 $("#LoginNPU").fadeIn(1);
 $("#LoginNPU").css({"visibility":"visible","display":"block"});
}

$(document).click(function(event) {
  $("#show_login").click(function(){
   showpopup();
  });
    if(!$(event.target).closest('#LoginNPU').length) {
        if($('#LoginNPU').is(":visible")) {
            $('#LoginNPU').hide();
        }
    }
})
