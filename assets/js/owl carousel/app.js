// owl owlCarousel
$('.top-banner').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    smartSpeed:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// Call the plugin

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

//Partners
$('.brand-banner').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    autoplay:true,
    smartSpeed:3000,
    responsive:{
        0:{
            items:1
        },
        300:{
            items:2
        },
        600:{
            items:3,
            center:true
        },
        992:{
            items:4
        },
        1200:{
            items:5,
            center: true
        }
    }
})

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})