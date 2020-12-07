$(function () {

    $(document).scroll(function (evt) {
        if ($(this).scrollTop() > 20) {
            $('.top').attr('style', 'position: fixed !important;');
        }
        else {
            $('.top').removeAttr('style');
        }

        if ($(this).scrollTop() > 600) {
            $('.up').css('bottom', '15px');
        }
        else {
            $('.up').removeAttr('style');
        }
    });

    $('.carousel-inner div').addClass('carousel-item');

    $('.carousel-item section').addClass('carousel-caption');

    $('.nav-item').addClass('mr-4');

    $('.tab-pane').addClass('mt-3');

    $('.top').children('button').addClass('mr-auto');

    var forms = document.getElementsByClassName('needs-validation');
    for (const form of forms) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
            }
            form.classList.add('was-validated');
        });

    }

    $('.navbar a').click(function (evt) {
        const target = this.hash;
        const offsetTop = 130;
        const top = $(target).offset().top;

        $('html').animate({
            scrollTop: top - offsetTop,
        }, 1000);
    });

    $('.card-footer button').addClass('buy');
    $('.buy, #kif').click(function () {
        $('#gallery').load('buy.html');
        $('#gallery').css('height', '30rem');
    });

    $('.row img').addClass('col-sm-3 p-0');

    $('#fare div').addClass('mr-5');

    if ($(window).width() <= 768) {
        $('.top button').addClass('btn-sm ml-4 mt-1');
        $('#navpak').removeClass('navbar-expand');
        $('#card').removeClass('float-left');
        $('.card').addClass('w-100');
        $('#tabpane').removeClass('w-50');
        $('#fare div').addClass('mt-3 mr-4');
        $('#fare div').removeClass('mr-5');
        $('#fare').removeClass('navbar navbar-expand');
        $('#usinfo div').removeClass('float-right float-left');
    }

    $('#hambutton').click(function () {
        $('#navpak').toggleClass('hamclose');
    });

});