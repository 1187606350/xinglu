$(function () {
    var isPhone = /^1[34578]\d{9}$/;
    var isCode = /^\d{6}$/;
    var isPassword = /^(\w){6,20}$/;
    var phoneState = false;
    var codeState = false;
    var passowrdState = false;
    var repeatState = false;
    setTimeout(function () {
        $('#phone').focus();
    }, 200);
    $('#phone').on('blur', function () {
        if (
            $('#phone').val() == '' ||
            !isPhone.test(parseInt($('#phone').val()))
        ) {
            $('#phone').next().show();
            phoneState = false;
        } else {
            $('#phone').next().hide();
            phoneState = true;
        }
        checkform();
    });

    $('#verificationCode').on('blur', function () {
        if (isCode.test(parseInt($('#verificationCode').val()))) {
            $('#verificationCode').next().hide();
            codeState = true;
        } else {
            $('#verificationCode').next().show();
            codeState = false;
        }
        checkform();
    });

    $('#newPassword').on('blur', function () {
        if (
            $('#newPassword').val() == '' ||
            !isPassword.test($('#newPassword').val())
        ) {
            $('#newPassword').next().show();
            passowrdState = false;
        } else {
            $('#newPassword').next().hide();
            passowrdState = true;
        }
        checkform();
    });

    $('#repeatPW').on('blur', function () {
        if ($('#repeatPW').val() == $('#newPassword').val()) {
            $('#repeatPW').next().hide();
            repeatState = true;
        } else {
            $('#repeatPW').next().show();
            repeatState = false;
        }
        checkform();
    });
    $('#repeatPW').on('keyup', function () {
        if ($('#repeatPW').val() == $('#newPassword').val()) {
            $('#repeatPW').next().hide();
            repeatState = true;
        } else {
            $('#repeatPW').next().show();
            repeatState = false;
        }
        checkform();
    });

    function checkform() {
        if (phoneState && codeState && passowrdState && repeatState) {
            $('.submit-btn').removeAttr('disabled');
            $('.submit-btn').css('cursor', 'pointer');
            $('.submit-btn').css('opacity', '1');
        } else {
            $('.submit-btn').css('disabled');
            $('.submit-btn').css('cursor', 'not-allowed');
            $('.submit-btn').css('opacity', '0.3');
        }
    }
    $('.submit-btn').click(function () {
        $('.find-main').hide();
        $('.find-success').show();
    });

    $('.getCode').click(function () {
        if (phoneState == false) {
            $('#phone').focus();
        } else {
            $(this).text('已发送');
        }
    });
});
