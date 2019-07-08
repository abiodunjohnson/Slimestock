// $(document).ready(function() {

//     $(".navscroll").show();

//     $(document).ready(function() {
//         $(window).scroll(function() {
//             if ($(this).scrollTop() < 170) {
//                 $('.navscroll').fadeIn();
//             } else {
//                 $('.navscroll').fadeOut();
//             }
//         });
//     });

// });

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('nav').addClass('scroll');
    }
    else {
        $('nav').removeClass('scroll');
    }
});
