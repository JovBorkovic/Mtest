$().ready(function(){
    
    $('.parallax-container').dblclick(function(){
        let parallax = $('.parallax-container');
        let stretch  = 'stretch';
        
        if (parallax.hasClass(stretch)) {
                parallax.removeClass(stretch);
        }
        else {
            parallax.addClass(stretch);
        }
    });
    
});