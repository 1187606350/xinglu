$(function () {
    var isPhone = /^1[34578]\d{9}$/;
    var isCode = /^\d{6}$/;
    var phoneState = false;
    var codeState = false;
    var flag = false;
    setTimeout(function () {
        $("#phoneNumber").focus();
    }, 200);
    $("#phoneAccount").on("blur", function () {
        if ($("#phoneAccount").val() == "") {
            $("#phoneAccount").next().show();
            phoneState = false;
        } else {
            $("#phoneAccount").next().hide();
            phoneState = true;
        }
        checkform();
    });
    $("#phoneNumber").on("blur", function () {
        if ($("#phoneNumber").val() == "" || !isPhone.test(parseInt($("#phoneNumber").val()))) {
            $("#phoneNumber").next().show();
            phoneState = false;
        } else {
            $("#phoneNumber").next().hide();
            phoneState = true;
        }
        checkform();
    });
    $("#codeNumber").on("blur", function () {
        if (isCode.test(parseInt($("#codeNumber").val()))) {
            $("#codeNumber").next().hide();
            codeState = true;
        } else {
            $("#codeNumber").next().show();
            codeState = false;
        }
        checkform();
    });

    $("#setPw").on("blur", function () {
        if (
            $("#setPw").val() == "" ||
            !isPassword.test($("#setPw").val())
        ) {
            $("#setPw").next().show();
            passowrdState = false;
        } else {
            $("#setPw").next().hide();
            passowrdState = true;
        }
        checkform();
    });

    function getVerCode(getType) {
        $(getType).click(function () {
            if (phoneState == false) {
                $("#phoneNumber").focus();
                $("#phoneNumber").next().show();
            } else {
                var time = 60;
                var timer = setInterval(function () {
                    time--;
                    $(getType).text("（" + time + "秒）重发");
                    $(getType).css("pointer-events", "none");
                    if (time == 0) {
                        clearInterval(timer);
                        $(getType).text("获取验证码");
                        $(getType).css("pointer-events", "auto");
                    }
                }, 1000);
            }
        });
    }
    getVerCode(".getLogCode");
    getVerCode(".getRegCode");
    $.maskshowoff = {
        openMask: function (a, b) {
            $(a).click(function () {
                $('#mask').show();
                $(b).show({
                    effect: 'scale',
                    easing: 'easeInCirc',
                    duration: 400,
                    direction: 'middle',
                    scale: 'box',
                });
            });
        },
        closeMask: function (a, b) {
            $(a).click(function () {
                $(b).toggle({
                    effect: 'scale',
                    direction: 'both',
                    scale: 'box',
                });
                $('#mask').fadeOut(400);
            });
        },
    };
    $.maskshowoff.openMask('#nav-login', '#login');
    $.maskshowoff.openMask('#nav-register', '#register');
    $.maskshowoff.closeMask('#closeL', '#login');
    $.maskshowoff.closeMask('#closeR', '#register');
    $(function () {
        $(".toRegister").click(function () {
            $("#login").hide();
            $("#register").toggle({
                effect: "clip",
                duration: 600,
            });
        });
        $(".toLogin").click(function () {
            $("#register").hide();
            $("#login").toggle({
                effect: "clip",
                duration: 600,
            });
        });
        $(".input-item img").click(function () {
            if (!flag) {
                $(".yincang").hide().siblings().show();
                $(".setPW").prop("type", "text");
                flag = true;
            } else if (flag) {
                $(".kejian").hide().siblings().show();
                $(".setPW").prop("type", "password");
                flag = false;
            }
        });

    });
    $(".login-title a").click(function () {
        $(".active").removeClass("active");
        $(this).addClass("active");
    });

    function displayUserinfo() {
        $(".mysetting").css("visibility", "visible");

        $(".mysetting").mouseover(function () {
            $(".mysetting").css("visibility", "visible");
        });
        $(".mysetting").mouseout(function () {
            $(".mysetting").css("visibility", "hidden");

        });
    }

    function checkagree() {
        var checkFlag = false;
        $(".check-box").click(function () {
            if (!checkFlag) {
                $(this).children("img").css("display", "none");
                checkFlag = true;
            } else if (checkFlag) {
                $(this).children("img").css("display", "block");
                checkFlag = false;
            }

        })
    }

    function hideUserinfo() {
        $(".mysetting").css("visibility", "hidden");

    }
    $(".xinglu-user").mouseover(function () {
        displayUserinfo();
    })
    $(".xinglu-user").mouseout(function () {
        hideUserinfo();
    })
    checkagree();
    $(".login-wrap").tabs();

})