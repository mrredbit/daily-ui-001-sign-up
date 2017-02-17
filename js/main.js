var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

$(function () {
    $('#sign-up .main button.join').on('click', function () {
        showModal();
    });
});

function showModal() {
    $('#sign-up .main').addClass('animated fadeOutUp').one(animationEnd, function () {
        $(this).addClass('hidden');
        $('#sign-up .modal').addClass('animated slideInRight').one(animationEnd, function () {
            $(this).removeClass('hidden');
        });
        $('#sign-up .modal .left-col').addClass('animated unfold');
    });
}