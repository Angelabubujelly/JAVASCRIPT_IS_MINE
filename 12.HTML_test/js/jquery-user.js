$(function () {
    // 각각 서브메뉴가 내려오기
    $(".nav>li").mouseover(function() {
        $(".nav>li").children(".submenu").stop().slideDown();
    });
    $(".nav>li").mouseout(function() {
        $(".nav>li").children(".submenu").stop().slideUp();
    });

//fadeIn_Out
var x = $(".gallery books");
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