$('.intro__btn').on("click", function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $(".q1").offset().top
    }, 500)
})

$('.btn__result').on("click", function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $(".mail").offset().top
    }, 500)
})
