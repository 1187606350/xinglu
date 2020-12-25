$(function () {
    

    $('.shop-liangChoose li').each(function (index) {
        $(this).mouseenter(function () {
            $(this).children().last().slideDown();
        });
        $(this).mouseleave(function () {
            $(this).children().last().stop().slideUp();
        });
    });

    $.maskshowoff = {
        openMask: function (a, b) {
            $(a).click(function () {
                $('#mask').show();
                $(b).toggle({
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
                $('#mask').fadeOut(1000);
            });
        },
    };
  
    $.buytips = {
        openTips: function (a,b) {       
            $(a).click(function () {
                $("#mask").show();  
                 
                $(b).toggle({
                    effect: "clip",
                    duration: 400,
                })
                
               
            })
            
        }
    }
    
    $.buytips.openTips(".fail", "#buy_fail_tips")
    $.buytips.openTips(".success", "#buy_success_tips")
    $.maskshowoff.openMask('.shop-giveAway', '#giveLiangWrap');
    $.maskshowoff.openMask('.shop-buy', '#buyLiangWrap');
    $.maskshowoff.openMask('.shop-buyButton', '#buyCarWrap');
    $.maskshowoff.openMask('#openVip', '#openVipWrap');
    $.maskshowoff.openMask('#openSvip', '#openSVipWrap');
    // $.maskshowoff.openMask('.shop-liangsou', '#search_no_result');
    $.maskshowoff.openMask('.shop-liangsou', '#search_result');

    $.maskshowoff.closeMask('#closebuyliang', '#buyLiangWrap');
    $.maskshowoff.closeMask('#closegiveliang', '#giveLiangWrap');
    $.maskshowoff.closeMask('#closebuycar', '#buyCarWrap');
    $.maskshowoff.closeMask('#closevip', '#openVipWrap');
    $.maskshowoff.closeMask('#closeSvip', '#openSVipWrap');
    var getIndexNum = sessionStorage.getItem("tabLiNum");
  
    $(".shopChoose li").on('click',function(){     
        var indexNum = $(this).index(); //所点击li的索引值
        sessionStorage.setItem("tabLiNum",indexNum); //将(下标名称，索引值)存入session中
    })
    $('.xinglu-shopWrap').tabs({
        active: getIndexNum
    });
   


});