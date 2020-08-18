$('.intro__btn').on("click", function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $(".q1").offset().top
    }, 500)
})

/* $('.quest1').on("click", function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $(".q2").offset().top
    }, 500)
})

$('.quest2').on("click", function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $(".q3").offset().top
    }, 500)
})

$('.quest3').on("click", function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $(".q4").offset().top
    }, 500)
})

$('.quest4').on("click", function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $(".q5").offset().top
    }, 500)
})

$('.quest5').on("click", function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $(".q6").offset().top
    }, 500)
}) */