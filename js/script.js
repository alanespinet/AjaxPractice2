
GetAjaxRequest();

function GetAjaxRequest()
{
  $.ajax({
    url: "http://fvi-grad.com:4004/quote",
    success: function(resp, txt, xhr){
      $("#quote").html(resp.quote);
      $("#author").html(resp.author);
    }
  });
}

$("#reset").on("click", function(){
  GetAjaxRequest();
});
