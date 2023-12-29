$(document).ready(function(){
    $(".slideshow img").css("display","none");
    $(".main-img").hover(function(){
        $(".play").animate({opacity:"0.6"},150,function(){
            $(".left").hover(function(){
                $(this).children(".btn").children(".tri").animate({left: "-8px"},100)
            },function(){
                $(this).children(".btn").children(".tri").animate({left: "0px"},100) 
            })
            $(".right").hover(function(){
                $(this).children(".btn").children(".tri").animate({left: "8px"},100)
            },function(){
                $(this).children(".btn").children(".tri").animate({left: "0px"},100) 
            })
        })
    },function(){
        $(".play").animate({opacity:"0"},150)
    });
    $(".slideshow").each(function(){
        let slideimgs = $(this).find("img"),
            slideimgscount = slideimgs.length,
            currentindex = 0;

        slideimgs.eq(currentindex).fadeIn();

        setInterval(showNextSlide, 5000);

        function showNextSlide(){
            let nextIndex = (currentindex + 1) % slideimgscount;
            console.log(nextIndex)
            slideimgs.eq(currentindex).fadeOut();
            slideimgs.eq(nextIndex).fadeIn();
            currentindex = nextIndex;
        }

        $(".right").on("click",function (){
            let nextIndex = (currentindex + 1) % slideimgscount;
            console.log(nextIndex)
            slideimgs.eq(currentindex).fadeOut();
            slideimgs.eq(nextIndex).fadeIn();
            currentindex = nextIndex;
        });

        $(".left").on("click",function (){
            let nextIndex = (currentindex - 1) % slideimgscount;
            console.log(nextIndex)
            slideimgs.eq(currentindex).fadeOut();
            slideimgs.eq(nextIndex).fadeIn();
            currentindex = nextIndex;
        });
    });


});
