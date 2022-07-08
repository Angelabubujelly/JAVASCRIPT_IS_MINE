$(function() {
    $(".nav > li").mouseover(function() {
        $(".submenu").stop().slideDown();
    })
    $(".nav").mouseout(function() {
        $(".submenu").stop().slideUp();
    });

    var x = $(".slide img");
    var y = 3;
    setInterval(function() {
        y--;
        if(y==0) {
            x.fadeIn();
            y = 3;
        } else {
            x.eq(y).fadeOut();
        }       
    }, 2000)
})


    function nextGallery() {
        var x = $(".gallery");
        x.animate({left:"-=120"});
        if(x.position().left == -600) {
            x.animate({left:"0"});
        }
    }

    function prevGallery() {
        var x = $(".gallery");
        x.animate({left:"+=120"});
        if(x.position().left == 120) {
            x.animate({left:"0"});
        }
    }