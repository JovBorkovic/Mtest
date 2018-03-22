$().ready(function(){
    

    
//=============================        Parallax Stretch Animation Trigger

//------------------  Add the class on double click
    $('.parallax-container').dblclick(function(){
        let parallax = $('.parallax-container');//creates a block scope local variable for 'parallax-container'.
        let stretch  = 'stretch';//creates a block scope local variable for the string "stretch".
        
        parallax.addClass(stretch);//adds class stretch to parallax.

    });
    
//-----------------  Remove the class on click
    $('.parallax-container').click(function(){
        let parallax = $('.parallax-container');//creates a block scope local variable for 'parallax-container'.
        let stretch  = 'stretch';//creates a block scope local variable for the string "stretch".
        
        //checks to see if parallax has class stretch.
        if(parallax.hasClass(stretch)){
            //if it does...
            //this code is executed.
            parallax.removeClass(stretch);
        }
        //else nothing happens.
    });
    
    
    
//=============================           Tab button trigger 
//----------------  Click event for tabs (Desktop)  
    $('.tab-links > a > .tab').click(
    //Function for desktop tabs
    //variable that holds a function
        function tabs() {
            //variable that hold the 'this' 'data-tab' information
            //the 'this' which in this case is the current '.tab' that was clicked
            var tab_id = $(this).attr('data-tab');
            
            //removes the class 'current' from all elements with a '.tab' class
            $('.tab-links > a > .tab').removeClass('current');
            //removes the class 'current' from all elements with a '.tab-content' class
            $('.tab-content').removeClass('current');

            //adds a class '.current' to the 'this'
            //in this case the 'this' is the '.tab' container that was clicked
            $(this).addClass('current');
            //adds a class '.current' to the id container that matches the 'this' 'data-tab' value
            $("#"+tab_id).addClass('current');
        }
    );

//----------------  Click event for tabs (Mobile) 
    $('.tabs-mobile > a > .tab').click(
    //Function for mobile tabs
    //variable that holds a function
        function tabsMobile() {
            //variable that hold the 'this' 'data-tab' information
            //the 'this' which in this case is the current '.tab' that was clicked
            var tab_id = $(this).attr('data-tab');
            
            //removes the class 'current' from all elements with a '.tab' class
            $('.tabs-mobile > a > .tab').removeClass('current');
            //removes the class 'current' from all elements with a '.tab-content' class
            $('.tab-content').removeClass('current');

            //adds a class '.current' to the 'this'
            //in this case the 'this' is the '.tab' container that was clicked
            $(this).addClass('current');
            //adds a class '.current' to the id container that matches the 'this' 'data-tab' value
            $("#"+tab_id).addClass('current');
        }
    );
    
    
//============================            Tab mobile

    (function() {
        var clone = $('.tab-links').clone();
        var winIsSmall= $(window).width() <= 768;

        if (winIsSmall) {
            if($('.tabs-mobile').length < 1 ) {
                clone.insertBefore('.acc-body').removeClass('tab-links').addClass('tabs-mobile');
                $('.tab-links').remove();
            }
        }
        
        else {
            if($('.tab-links').length < 1 ) {
                clone.appendTo('.wide-container > .parallax-container > .parallax >  div:nth-child(2)');
                $('.tabs-mobile').remove();
            }
        }
    })();



    $( window ).resize(function() {
        var clone = $('.tab-links').clone();
        var winIsSmall= $(window).width() <= 768;

        if (winIsSmall) {
            if($('.tabs-mobile').length < 1 ) {
                clone.insertBefore('.acc-body').removeClass('tab-links').addClass('tabs-mobile');
                $('.tab-links').remove();
            }
        }
        
        else {
            if($('.tab-links').length < 1 ) {
                clone.appendTo('.wide-container > .parallax-container > .parallax > div:nth-child(2)');
                $('.tabs-mobile').remove();
            }
        }
    });
    
});