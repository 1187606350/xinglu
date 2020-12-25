$(function () {
    // 大厅切换页面显示
    showTabs(".hallBox>li", ".popularity_box>ul", 0);
    showTabs(".rankBox>li", ".rankbox>div", 2);

    function showTabs(selectname, tabname, index) {
        $(tabname).hide();
        $(tabname).eq(index).show();
        $(selectname).each(function (i) {
            $(this).click(function () {
                $(tabname).hide();
                $(tabname).eq(i).show();
                $(selectname).removeClass("active");
                $(this).addClass("active");

            });
        });
    }
    $(".itembox li").bind("click", function () {
        return false
    })

    //触摸菜单下滑
    $(".itemlist").click(function (event) {
        $(this).find(".itembox").stop().slideToggle(300);
        $(this).siblings().find(".itembox").stop().slideUp(300);
    })


    //itembox样式切换
    $(".hallBox li").click(function () {
        var roomName = $(this).children("a").text();
        $(".room-title .current-location").text(roomName)
    })
    $(".rankBox li").click(function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");

    })
    $(".activityBox li").click(function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");

    })
    //滚动条设置

    //搜索房间结果
    $(".searchbutton").click(function () {
        $(".search-result-box").css("display", "block");
        $(".enterRoom_recently").css("display", "none");
        $(".collection_room").css("display", "none");
    })
    //关闭搜索结果
    $(".return").click(function () {
        $(".search-result-box").css("display", "none");
        $(".enterRoom_recently").css("display", "block");
        $(".collection_room").css("display", "block");
    })


    //弹窗
    $.popBox = {
        result: function (title, msg, callback) {
            popHtml("result", title, msg);
            toConfirm(callback);
            toCancel();
            toShow();
        },
        confirm: function (title, msg, callback) {
            popHtml("confirm", title, msg);
            toConfirm(callback);
            toCancel();
            toShow();
        },
        search: function (title, msg, callback) {
            popHtml("search", title, msg);
            toConfirm(callback);
            toShow();
            toCancel();
        },

    }

    var popHtml = function (type, title, msg) {
        var _html = "";
        _html += `<div class="desk_popupbox">
    <div class="popup_box">
        <div class="head_popup">
            <span>${title}</span><img class="close_pop" src="./images/guanbi.png" alt="">
        </div>
        <div class="content_popup">
            <div class="content_area">`
        switch (type) {
            case "search":
                _html += `
                <span>${msg}</span> 
                <input type="text" >
                            </div>
                        </div>
                        <div class="footer_popup">
                            <div class="footer-button confirm">确定</div>
                            <div class="footer-button cancel">取消</div>
                        </div>
                    </div>
                </div>
        `;
                break;
            case "result":
                _html += ` <img src="./images/exclamation.png" alt="">
            <span>${msg}</span> 
        </div>
    </div>
    <div class="footer_popup">
        <div class="footer-button confirm">确定</div>
    </div>
</div>
</div>
    `;
                break;
            case "confirm":
                _html += ` <img src="./images/wenhao.png" alt="">
            <span>${msg}</span> 
           
        </div>
    </div>
    <div class="footer_popup">
        <div class="footer-button confirm">确定</div>
        <div class="footer-button cancel">取消</div>
    </div>
</div>
</div>`;
                break;

        }

        $("body").append(_html);

    }
    // 确认按钮
    var toConfirm = function (callback) {
        $(".footer_popup .confirm").click(function () {
            $(".desk_popupbox").remove();
            if (typeof (callback) == 'function') {
                callback();
            }
        });
    }
    var toShow = function () {
        $("#mask").show();
        $(".desk_popupbox").show({
            effect: 'scale',
            duration: 600,
            direction: 'middle',
        });
        if (typeof (callback) == 'function') {
            callback();
        }
    }
    //取消事件
    var toCancel = function () {
        $(".footer_popup .cancel,.close_pop").click(function () {
            $(".desk_popupbox").remove();
            $("#mask").fadeOut(400);
        });
    }
    $(".roomchoose .delete_room").bind("click", function () {
        $.popBox.confirm("提示", "确定要删除吗？", function () {
            $.popBox.result("", "删除成功", function () {
                $("#mask").fadeOut(400);
            });
        });
    });
    // 切换标签事件

    $(".guard_time li").click(function () {
        $(this).siblings().removeClass("active")
        $(this).addClass("active")
    })
    $(".guardType li").click(function () {
        $(this).siblings().removeClass("active")
        $(this).addClass("active");
        if ($(this).index() == 0) {
            $("#goldGuard").show();
            $("#sliverGuard").hide();
        }
        if ($(this).index() == 1) {
            $("#sliverGuard").show();
            $("#goldGuard").hide();

        }

    })

    //月度消费查询
    laydate.render({
        elem: '#search-rank',
        type: 'month',
        value: new Date()
    });










})