$(function () {

    $(".nav>li").mouseover(function() {
        $(".submenu").stop().slideDown();
    });
    $(".nav>li").mouseout(function() {
        $(".submenu").stop().slideUp();
    });

//fadeIn_Out
var x = $(".booksPic img");
var y = 3;
setInterval(function(){
    y--;
    if(y==0){
        x.fadeIn();
        y=3;
    }else {
        x.eq(y).fadeOut();
    }
},2000)
});

var 지금사진 = 1;
     
$('.next').on('click', function(){
    $('.slide-container').css('transform', 'translateX(-' + 지금사진 + '00vw)');
    지금사진 += 1;
})



