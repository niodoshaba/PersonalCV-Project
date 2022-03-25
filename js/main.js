

$(function(){

    var w = $(window).width();
    var h = $(window).height();

 
    $(".header-border").animate({opacity:'1'},1000,function(){
        $(".info").animate({right:'-70px'},1000);
        $(".info").animate({right:'-80px'},100);
        $(".info").animate({right:'-78px'},100,function(){
            $(".contact").animate({opacity:'1'},function(){
                $(".skill-div").animate({opacity:'1'},function(){
                    $(".exp-div").animate({opacity:'1'},function(){
                        $(".project-div").animate({opacity:'1'},function(){
                            $(".about-div").animate({opacity:'1'});
                        });
                    });
                });
            })
        });    
    });
    

    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $(".to-top").fadeIn()
        } else{
            $(".to-top").fadeOut()
        }
    })
    $(".to-top").click(function(){
        $('html, body').animate({scrollTop: 0}, 200);
    })

})