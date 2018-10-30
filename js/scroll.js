
$( document ).ready(function(){
//隐藏三个页面
    $("#about_scroll").fadeOut();
    $("#work_scroll").fadeOut();
    $("#contact_scroll").fadeOut();

//点击渐变出现
    $("#about").click(function(){
        $("#index").fadeOut();
        $("#about_scroll").fadeIn();

    });
    $("#work").click(function(){
        $("#index").fadeOut();
        $("#work_scroll").fadeIn();
    });
    $("#contact").click(function(){
        $("#index").fadeOut();
        $("#contact_scroll").fadeIn();
    })
    $(".about-border").click(function(){
        $(".page").fadeOut();
        $("#index").fadeIn();
        $(".ileft").addClass('animated slideInLeft');
        $(".iright").addClass("animated slideInRight")
    })
});

