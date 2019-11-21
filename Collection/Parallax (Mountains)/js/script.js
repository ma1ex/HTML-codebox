$(document).ready(function() {
    
    // Отслеживание событий скрола
    $(window).scroll(function(event) {
        var s = $(this).scrollTop(); // Прокрученные пиксели браузера от верха страницы
        var w = $(this).outerWidth(); // Ширина окна браузера
        var h = $('.content').outerHeight(); // Высота контентной части
        var h_b = $('.parallax').outerHeight(); // Высота блока parallax
        var p = s / h * 100; // Процент прокрутки контентной части
        var p_b = s / h_b * 100; // Процент прокрутки верхней части
        var o = 1 - 1 / 100 * p_b; // Процент непрозрачности

        var z_1 = 1 + (w / 10000 * p_b); // Увеличение (приближение) тумана при прокрутке скрола вниз
        $('.parallax__fog').css('transform', 'scale(' + z_1 + ')');
        $('.parallax__fog').css('opacity', o); // Изменение прозрачности тумана, чтобы он не перекрывал контент

        // Едва заметное движение самых дальних гор
        var z_2 = 1 + (w / 5000000 * p);
        $('.parallax__mountain_1').css('transform', 'scale(' + z_2 + ')');

        var hr = w / 2000 * p_b; // Горизонталь для translate3d
        var z_3 = 1 + (w * 0.000005 * p_b);
        $('.parallax__mountain_2').css('transform', 'translate3d('+ hr +'px, 0, 0) scale(' + z_3 + ')');

        var hr_2 = w / 1500 * p_b; // Горизонталь для translate3d
        var z_4 = 1 + (w * 0.00001 * p_b);
        $('.parallax__mountain_3').css('transform', 'translate3d('+ hr_2 +'px, 0, 0) scale(' + z_4 + ')');
    });
});