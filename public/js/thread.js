$().ready(function(){
    
    
    $.fn.isOnScreen = function(){
    
        var win = $(window);

        var viewport = {
            top : win.scrollTop(),
            left : win.scrollLeft()
        };
        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();

        var bounds = this.offset();
        bounds.right = bounds.left + this.outerWidth();
        bounds.bottom = bounds.top + this.outerHeight();

        return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

    };

    var T_Container = $('#T_Container');
    
    
    $(window).scroll(function () {
        if ($(window).width() > 1024){
            if($('.T_Container').length > 0) {
                if ($('.T_Container').isOnScreen() === false){
                    T_Container.addClass('threadNot');
                    T_Container.removeClass('T_Container');
                }
            }
            if($('.threadNot').length > 0) {
                if ($(window).scrollTop() <= 64){
                    T_Container.removeClass('threadNot');
                    T_Container.addClass('T_Container');
                }
            }
        }
        else {
            T_Container.removeClass('T_Container');
            T_Container.removeClass('threadNot');
            T_Container.addClass('T_Container');
        }

    });
    
    
    
    
});