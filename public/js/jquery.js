$(document).ready(function() {
    $('.intro__btn').on("click", function(event){
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $(".q1").offset().top
        }, 500)
    })

    $("#mail__wrapper").keydown(function(event){
    if(event.keyCode == 13) {
        event.preventDefault();
        return false;
        }
    });
});