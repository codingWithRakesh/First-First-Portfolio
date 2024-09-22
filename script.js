$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer", "Teacher"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer", "Teacher"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

 const disabledKeys=["u","I","o","s","p","b","d","e","f","g","h","i","j","k","l","m","n","q","r","t","","w","y","z","1","2","3","4","5","6","7","8","9","0","Shift","C",",",".","/","?","`","~","!","@","#","$","%","^","&","*","(",")","-","_","=","+","Q","W","E","R","T","Y","U","I","O","P","[","{","}","]","|","A","S","D","F","G","H","J","K","L",";","'",":","Z","X","V","B","N","M","<",">","Enter"];
        const showAlert=e=>{e.preventDefault();
        return}
        document.addEventListener("contextmenu",e=>{showAlert(e);});
        document.addEventListener("keydown",e=>{if(e.ctrlKey&&disabledKeys.includes(e.key)||e.key==="F12" || e.key==="Meta"){showAlert(e);}});

          
// ----------------------------------------------------------------------------------------------------------
    
    