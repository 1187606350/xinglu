$(function () {
    var mySwiper = new Swiper("#common-banner", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            bulletActiveClass: "my-bullet-active",
        },
        loop: true,
    });
    var hdSwiper = new Swiper("#huodong-swiper", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            bulletClass: 'hd-bullet',
            bulletActiveClass: "hd-bullet-active",

        },
        loop: true,
    });
    var rechargeSwiper = new Swiper("#recharge-banner", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            bulletActiveClass: "my-bullet-active",
        },
        loop: true,
    });
    var enterRoom = new Swiper('.enterRoom', {
        slidesPerView: 5,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            disabledClass: 'my-button-disabled',
        },
    });
    var collectRoom = new Swiper('.collectRoom', {
        slidesPerView: 5,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            disabledClass: 'my-button-disabled',
        },
    });
    var hdBroadcast = new Swiper("#hd-broadcast", {
        loop: true,
        direction : 'vertical',
        autoplay:true,
        speed:2000,
        autoplay : {
          delay:3000
        },
        
    });
    
});