$(function(){
    
    $(".header-border").animate({opacity:'1'},function(){
        $(".info").animate({right:'-70px'},1000);
        $(".info").animate({right:'-80px'},100);
        $(".info").animate({right:'-78px'},100,function(){
            $(".skill-div").animate({opacity:'1'},function(){
                $(".exp-div").animate({opacity:'1'},function(){
                    $(".project-div").animate({opacity:'1'}),function(){
                        $(".about-div").animate({opacity:'1'});
                    };
                });
            });
        });    
    });

})