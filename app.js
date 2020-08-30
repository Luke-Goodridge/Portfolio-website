//change navbar font colour with scroll
const headerOffset = 50;
$(document).ready(() => {
    $(window).scroll(() => {
        const endOfHeader = $("#projects").offset().top - headerOffset;
        let currentScrollPos = $(window).scrollTop();

        if(endOfHeader <= currentScrollPos){
            $("nav a").css("color", "black");
            $("nav").css("background-color", "white");
        }
        else {
            $("nav a").css("color", "white");
            $("nav").css("background", "none");
        }
    })
})