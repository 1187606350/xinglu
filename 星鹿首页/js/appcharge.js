$(function () {
    var mySwiper = new Swiper('.recharge-swiper', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.swiper-pagination',
        },
    })
    // 弹窗
    $.popBox = {
        result: function (title, msg, callback) {
            popHtml("result", title, msg);
            toConfirm(callback);
            toCancel();
            toShow();
        },
        confirm: function (title, msg,  callback) {
            popHtml("confirm", title,msg, callback);
            toConfirm(callback);
            toCancel();
            toShow();
        },
    }
 
    var popHtml = function (type, title,msg) {
        var _html = "";
        _html += ` 
            <div id="dialog-wrap">
                <div class="msg-dialog">
                    <div class="msg-dialog_header">${title}</div>
                    <div class="msg-dialog_content">`
        switch (type) {
            case "confirm":
                _html += `
                        <div class="dialog-message">
                            ${msg}
                        </div>
                    </div>
                    <div class="msg-dialog_footer">
                        <div class="msg-button dialog_cancel">取消</div>
                        <div class="msg-button dialog_confirm">确认</div>
                    </div>
                </div>
            </div>
            `;
                break;
        }

        $("body").append(_html);

    }

    var toShow = function () {
        $("#mask").show();
        $("#dialog-wrap").show({
            effect: 'clip',
           
            duration: 300,
            direction: 'both',
         
        });
        if (typeof (callback) == 'function') {
            callback();
        }
    }
    // 确认按钮
    var toConfirm = function (callback) {
        $(".dialog_confirm").click(function () {
            $("#dialog-wrap").remove();
            if (typeof (callback) == 'function') {
                callback();
            }
        });
    }
    //取消按钮事件
    var toCancel = function () {
        $(".dialog_cancel").click(function () {
            $("#dialog-wrap").remove();
            $("#mask").hide();
        });
    }
    $(".recharge-button").bind("click", function (num) {
        var editvalue = $(".pay-input").val();
        $(".edit-pay").attr('data-value',editvalue) 
        num = $(".recharge-list .selected").attr("data-value");
        $.popBox.confirm("提示", `您确定要充值${num}元吗？`, function () {
            $("#mask").fadeOut(400)
        })
    })



    $(".recharge-list li").click(function () {
        $(this).siblings().removeClass("selected");
        $(this).addClass("selected");
        if ($(this).hasClass("edit-pay")) {
            $(this).find("em").hide();
            $(this).find(".pay-input").show();
            $(".pay-input").focus()
        } else {
            $(".edit-pay").find("em").show();
            $(".edit-pay").find(".pay-input").hide();
            $(".edit-pay").find(".pay-input").val("");
        }
    })

})