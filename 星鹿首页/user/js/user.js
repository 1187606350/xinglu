$(function () {
    $(".fans-wrap").tabs();
    // 房间管理多选删除
    $(".bm-check input").click(function () {
        if ($(this).hasClass("selected")) {
            $(this).removeClass("selected").addClass("unselected")
        } else {
            $(this).removeClass("unselected").addClass("selected")
        }
    })
    $("input[name='allselected']").click(function () { //全选样式
        if ($(this).hasClass("allselected")) {
            $(this).removeClass("allselected")
        } else {
            $(this).addClass("allselected")
        }
    });
    $('#allselected').click(function () { //全选点击
        if (this.checked) {
            $("input[name='bm_check']").each(function () {
                $(this).prop("checked", true);
                $(this).removeClass().addClass("selected")
            });
        } else {
            $("input[name='bm_check']").each(function () { //未全选
                $(this).prop("checked", false);
                $(this).removeClass().addClass("unselected")
            });
        }
    });
    $("input[name='bm_check']").each(function () {
        $(this).click(function () {
            if (this.checked == false) {
                $('#allselected').removeClass();
                $('#allselected').prop("checked", false);

            }
        })
    })
    $(".click-bm-before").click(function () {
        $(this).hide();
        $(".click-bm-after").show();
        $(".bm-check").show();
    })
    $(".exit-bm").click(function () {
        $(".click-bm-after").hide();
        $(".click-bm-before").show();
        $(".bm-check").hide();
    });



    // 弹窗
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
        search_user: function (title, msg, callback) {
            popHtml("search_user", title, msg);
            toConfirm(callback);
            toShow();
            toCancel();
        },
        guard: function (title, callback) {
            popHtml("guard", title);
            toSave(callback);
            toShow();
            toCancel();
            toChange();
        },
        setInfo: function (title, callback) {
            popHtml("setInfo", title);
            toSave(callback);
            toShow();
            toCancel();

        },
        changePW: function (title, callback) {
            popHtml("changePW", title);
            toSave(callback);
            toShow();
            toCancel();

        },
    }
    var toShow = function () {
        $("#mask").show();
        $("#msg-wrap").show({
            effect: 'scale',
            easing: 'easeInCirc',
            duration: 400,
            direction: 'middle',
            scale: 'box',
        });
        if (typeof (callback) == 'function') {
            callback();
        }
    }
    var popHtml = function (type, title, msg) {
        var _html = "";
        _html += `<div id="msg-wrap" class="popbox">
        <div class="msg_box">
            <div class="msg-title">
                <span>${title}</span>
                <img class="closetitle" src="../images/shopMall/close.png" alt="">
            </div>
            <div class="msg-content">`
        switch (type) {
            case "search_user":
                _html += `${msg}
                 <input class="search-user" > 
            </div>
            <div class="msg-footer">  
            <span class="toConfirm msg-button">确定</span>     
                    </div>
                </div>
            </div>
            `;
                break;

            case "result":
                _html += `${msg}
             </div>
             <div class="msg-footer">  
             <span class="toConfirm msg-button">确定</span>     
                </div>
            </div>
        </div>
        `;
                break;

            case "confirm":
                _html += `${msg}
             </div>
             <div class="msg-footer">  
             <span class="toConfirm msg-button" >确定</span>  
             <span class="toCancel msg-button">取消</span>   
                </div>
            </div>
        </div>`;
                break;

            case "guard":
                _html += ` `;

                break;

        }

        $("body").append(_html);

    }
    // 确认按钮
    var toConfirm = function (callback) {
        $(".toConfirm").click(function () {
            $("#msg-wrap").remove();
            if (typeof (callback) == 'function') {
                callback();
            }
        });
    }
    var toSave = function (callback) {
        $(".toConfirm").click(function () {
            $("#msg-wrap").remove();
            $("#mask").hide();
            if (typeof (callback) == 'function') {
                callback();
            }
        });
    }
    //取消按钮事件
    var toCancel = function () {
        $(".toCancel,.closetitle").click(function () {
            $("#msg-wrap").remove();
            $("#mask").hide();
        });
    }

    $(".delete-button").bind("click", function () {

        $.popBox.confirm("温馨提示", "执行删除后将无法恢复，确定继续吗？", function () {
            $("#bulkManage").find(".selected").parents("li").remove();
            $.popBox.result("温馨提示", "成功删除", function () {
                $("#mask").hide();

            });
        });
    });
    $(".addNow").bind("click", function () {
        $.popBox.search_user("添加房间管理员", "输入用户ID号添加房间管理员:", function () {
            $("#mask").fadeOut(400)
        })
    })
    $(".openguard").bind("click", function () {
        $.popBox.guard("开通守护")
    })
    $(".editInfo").bind("click", function () {
        $.popBox.setInfo("编辑信息")
    })
    $(".changePW").bind("click", function () {
        $.popBox.changePW("修改密码")
    })


















    // 日历渲染

    var startDate = laydate.render({
        elem: '#startTime',
        btns: ['clear', "confirm"],
        done: function (value, date) {
            var monthDay = laydate.getEndDate(date.month, date.year);
            if (value !== '') {
                endDate.config.min = {
                    year: date.year,
                    month: date.month - 1,
                    date: date.date,
                };
                endDate.config.max = {
                    year: date.year,
                    month: date.month - 1,
                    date: monthDay,
                };
            } else {
                endDate.config.min = {
                    year: 1900,
                    month: 0,
                    date: date.date,
                };
                endDate.config.max = {
                    year: 2099,
                    month: date.month - 1,
                    date: date.date,
                };
            }
        }
    });
    var endDate = laydate.render({
        elem: '#endTime',
        btns: ["clear", "confirm"],
        done: function (value, date) {
            var thisDate = new Date(date.year, date.month, 1);
            var firstDay = thisDate.getDate();
            if (value !== '') {
                startDate.config.max = {
                    year: date.year,
                    month: date.month - 1,
                    date: date.date,
                }
                startDate.config.min = {
                    year: date.year,
                    month: date.month - 1,
                    date: firstDay,
                }
            } else {
                startDate.config.max = {
                    year: 2099,
                    month: date.month - 1,
                    date: date.date,
                }
                startDate.config.min = {
                    year: 1900,
                    month: 0, //关键
                    date: 1
                }
            }
        }
    });
})