$(function () {
   
    $('.rechargeAmount li').click(function () {
        $(this).siblings().removeClass("on");
        $(this).addClass("on");
        if ($(this).hasClass("editItem")) {
            $(".pay_amount").focus()
        } else {
            $(".pay_amount").val("");
          $("#wealth_xingbi").val("")
        }
    });
  $(".inputid").focus(function(){
      $("#other").prop("checked","true")
  })


    $(".pay_amount").keyup(function(){
        var a = $(this).val();
       $("#wealth_xingbi").val(Math.round(a/10)) ;
           
    })

  
});
