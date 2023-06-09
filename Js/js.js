//const responsive={}
  

$(document).ready(function(){
 
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse')

    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    });


    //owl-carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:true,
        nav:true,
        navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
        responsive:{
            0:{
                items:1
            },
            320:{
                items:1
            },
            716:{
                items:2
            },
            960:{
                items:3
            }

        }

    });

    //click to scroll top

    $('.move-up span').click(function(){
        $('html,body').animate({
            scrollTop:0
        },3000);
    });

    //AOS instance
    AOS.init();
});