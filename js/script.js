(function($){
    $('td').click(function(){
        $(this).children('ul').slideToggle(600);
        $(this).children("i").toggleClass("rotate90");
        return false;
    });
})(jQuery);
