$(function () {
    $(".starRank").tabs();
    $(".richRank").tabs();

    function changetabs (tabName,choose) { //切换周星榜
        $(tabName).on("click", choose, function () {
            $(tabName).find(".active").removeClass("active");
            $(this).addClass("active");
        })
    }
    changetabs(".rich-cycle","a");
    changetabs(".star-cycle","a");
    changetabs(".rank-week","b");

    function changeGiftWeek (weekName) { //切换礼物榜
        $(weekName).on("click", "b", function () {
            if ($(this).attr("id") == "weekThis") {
                $("#lastWeek").hide();
                $("#thisWeek").show();
            } else if ($(this).attr("id") == "weekLast") {
                $("#lastWeek").show();
                $("#thisWeek").hide();
            }
        })
    }
    changeGiftWeek(".rank-week")
})