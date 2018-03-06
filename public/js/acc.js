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
    $('.tab-links > a > .tab').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.tab-links > a > .tab').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
    
});