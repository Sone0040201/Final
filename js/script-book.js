$(document).ready(function () {
    let smallScreen = window.matchMedia('screen and (max-width: 360px)');
    mediumScreen = window.matchMedia('screen and (max-width:768px)');
    largeScreen = window.matchMedia('screen and (min-width: 769px )')

    if(smallScreen.matches){
        $(".normal").on("click", function () {
            $(".royal").css("box-shadow", "0px -6px 4px 0px rgba(0, 0, 0, 0.25) inset")
            $(".normal").css("box-shadow", "0px 0px 0px 0px rgba(0, 0, 0, 0.25) inset")
            $(".info-area").css("background-color", "#63689A")
            $(".book-btn img").css("content", "url(./img/book-ticket/normalpass360.png)")
        })
        $(".royal").on("click", function () {
            $(".normal").css("box-shadow", "0px -6px 4px 0px rgba(0, 0, 0, 0.25) inset")
            $(".royal").css("box-shadow", "0px 0px 0px 0px rgba(0, 0, 0, 0.25) inset")
            $(".info-area").css("background-color", "#EFC124")
            $(".book-btn img").css("content", "url(./img/book-ticket/royalpass360.png)")
        })
        $(".book-btn").hover(
            function () {
                $(this).children(".book-btn h2").css('color', 'rgba(231, 111, 1, 1)')
            },
            function () {
                $(this).children(".book-btn h2").css('color', '#FFFFFF')
            }
        );
    
        $(".goods-1").hover(
            function () { //hover In...
                $(this).children(".goods-describe").slideDown('fast');
            },
            function () { //hover Out...
                $(this).children(".goods-describe").slideUp('fast');
            });
    }else{

        $(".normal").on("click", function () {
            $(".royal").css("box-shadow", "0px -6px 4px 0px rgba(0, 0, 0, 0.25) inset")
            $(".normal").css("box-shadow", "0px 0px 0px 0px rgba(0, 0, 0, 0.25) inset")
            $(".info-area").css("background-color", "#63689A")
            $(".book-btn img").css("content", "url(./img/book-ticket/normalpass.png)")
        })
        $(".royal").on("click", function () {
            $(".normal").css("box-shadow", "0px -6px 4px 0px rgba(0, 0, 0, 0.25) inset")
            $(".royal").css("box-shadow", "0px 0px 0px 0px rgba(0, 0, 0, 0.25) inset")
            $(".info-area").css("background-color", "#EFC124")
            $(".book-btn img").css("content", "url(./img/book-ticket/royalpass.png)")
        })
        $(".book-btn").hover(
            function () {
                $(this).children(".book-btn h2").css('color', 'rgba(231, 111, 1, 1)')
            },
            function () {
                $(this).children(".book-btn h2").css('color', '#FFFFFF')
            }
            );
            
            $(".goods-1").hover(
                function () { //hover In...
                    $(this).children(".goods-describe").slideDown('fast');
                },
                function () { //hover Out...
                    $(this).children(".goods-describe").slideUp('fast');
                });
            }
            })