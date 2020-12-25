$(function () {
    $(".follow-paging").jPages({
        containerID: "follow-list", //存放表格的窗口标签ID
        previous: "", //指示首页的按钮
        next: "", //指示尾页的按钮
        perPage: 18, //
        delay: 20 //分页时动画持续时间，0表示无动画
    });
    $(".recommend-paging").jPages({
        containerID: "recommend-list", 
        previous: "",
        next: "", 
        perPage: 18, 
        delay: 20 
    });
    $(".recommendroom-paging").jPages({
        containerID: "recommend-room", 
        previous: "",
        next: "", 
        perPage: 12, 
        delay: 20 
    });
    $(".collect-paging").jPages({
        containerID: "collect-list", 
        previous: "",
        next: "", 
        perPage: 20, 
        delay: 20 
    });
    $(".exchange-paging").jPages({
        containerID: "exchange-table", 
        previous: "", 
        next: "",
        perPage: 15, //
        delay: 20 
    });
    $(".gch_paging").jPages({
        containerID: "gch_list",
        previous: "",
        next: "",
        perPage: 4,
        delay: 20
    });
    $(".recharge-paging").jPages({
        containerID: "recharge-table",
        previous: "",
        next: "",
        perPage: 12,
        delay: 20

    });
    $(".gamelog-paging").jPages({
        containerID: "gamelog-table",
        previous: "",
        next: "",
        perPage: 22,
        delay: 20

    });
    $(".detailcon-paging").jPages({
        containerID: "detailcon-table",
        previous: "",
        next: "",
        perPage: 18,
        delay: 20

    });
    $(".livetime-paging").jPages({
        containerID: "livetime-table",
        previous: "",
        next: "",
        perPage: 11,
        delay: 20

    });
    $(".niceNumber-paging").jPages({
        containerID: "niceNumber-table",
        previous: "",
        next: "",
        perPage: 9,
        delay: 20
    });
    $(".incomecon-paging").jPages({
        containerID: "incomecon-table",
        previous: "",
        next: "",
        perPage: 10,
        delay: 20
    });
    $(".guard-paging").jPages({
        containerID: "guard-table",
        previous: "",
        next: "",
        perPage: 9,
        delay: 20
    });
    $(".gzsj-paging").jPages({
        containerID: "gzsj",
        previous: "",
        next: "",
        perPage: 15,
        delay: 20
    });
    $(".zbdj-paging").jPages({
        containerID: "zbdj",
        previous: "",
        next: "",
        perPage: 15,
        delay: 20
    });
    $(".fhdj-paging").jPages({
        containerID: "fhdj",
        previous: "",
        next: "",
        perPage: 15,
        delay: 20
    });
    $(".lsjr-paging").jPages({
        containerID: "lsjr",
        previous: "",
        next: "",
        perPage: 12,
        delay: 20
    });
    $(".qgqc-paging").jPages({
        containerID: "qgqc",
        previous: "",
        next: "",
        perPage: 12,
        delay: 20
    });
    $(".slth-paging").jPages({
        containerID: "slth",
        previous: "",
        next: "",
        perPage: 12,
        delay: 20
    });
    $(".xywt-paging").jPages({
        containerID: "xywt",
        previous: "",
        next: "",
        perPage: 12,
        delay: 20
    });
    $(".jsrh-paging").jPages({
        containerID: "jsrh",
        previous: "",
        next: "",
        perPage: 12,
        delay: 20
    });
    $(".mvlb-paging").jPages({
        containerID: "mvlb",
        previous: "",
        next: "",
        perPage: 12,
        delay: 20
    });
    $(".mlwx-paging").jPages({
        containerID: "mlwx",
        previous: "",
        next: "",
        perPage: 12,
        delay: 20
    });
    $(".mhkj-paging").jPages({
        containerID: "mhkj",
        previous: "",
        next: "",
        perPage: 12,
        delay: 20
    });
    $(".wwgk-paging").jPages({
        containerID: "wwgk",
        previous: "",
        next: "",
        perPage: 12,
        delay: 20
    });
    $(".cjwz-paging").jPages({
        containerID: "cjwz",
        previous: "",
        next: "",
        perPage: 12,
        delay: 20
    });
    $(".dmyl-paging").jPages({
        containerID: "dmyl",
        previous: "",
        next: "",
        perPage: 12,
        delay: 20
    });
    $(".gfpd-paging").jPages({
        containerID: "gfpd",
        previous: "",
        next: "",
        perPage: 12,
        delay: 20
    });

    function hideOnlyOne(pagename) {
        $(pagename).each(function () {
            if ($(this).children().length > 4) {
                $(this).show()
            } else {
                $(this).hide()
            }
        })
    }
    hideOnlyOne(".paging-site");
    hideOnlyOne(".paging-live");

});