$(document).ready(function(){
    $(".container").hover(
        function() {
            $(this).parent(".news-area").css("background-color","rgba(88, 88, 88, 1)")
            $(this).parent(".news-area-hide").css("background-color","rgba(88, 88, 88, 1)")
        },
        function() {
            $(this).parent(".news-area").css('background-color','rgba(88, 88, 88, 0.75)')
            $(this).parent(".news-area-hide").css("background-color","rgba(88, 88, 88, 0.75)")
        }
    );

    $(".more-btn").hover(function(){
        $(this).animate({gap: "10px"},250)
    },function(){
        $(this).animate({gap: "5px"})
    });

    $(".more-btn").on("click",function(){
        $(".news-area-hide").slideDown('fast');
        //$('html').css("height","1755px");
        $(".more-btn").css("display","none");
    });
})
