$(document).ready( function(){
    
    
//click function for support email
    $("#supportEmail").click(function(){
        let complaintForm   =   $("#complaintForm");
        let suggestionForm  =   $("#suggestionForm");
        let supportForm     =   $("#supportForm");
        let current         =   $(this);

        if(supportForm.hasClass('hide')){
            current.toggleClass('current');
        }
        else {
            current.toggleClass('current');
        }
        
        if(suggestionForm.hasClass('hide') && complaintForm.hasClass('hide'))
        {
            supportForm.toggleClass('hide');
        }
        else
        {
            suggestionForm.removeClass('hide').addClass('hide');
            complaintForm.removeClass('hide').addClass('hide');
            supportForm.toggleClass('hide');
        }
    });
    

//click function for suggestion email
    $("#suggestionEmail").click(function(){
        let complaintForm   =   $("#complaintForm");
        let suggestionForm  =   $("#suggestionForm");
        let supportForm    =   $("#supportForm");
        let current         =   $(this);

        if(supportForm.hasClass('hide')){
            current.toggleClass('current');
        }
        else {
            current.toggleClass('current');
        }      
        
        if(supportForm.hasClass('hide') && complaintForm.hasClass('hide'))
        {
            suggestionForm.toggleClass('hide');
        }
        else
        {
            supportForm.removeClass('hide').addClass('hide');
            complaintForm.removeClass('hide').addClass('hide');
            suggestionForm.toggleClass('hide');
        }
        
    });
    
    
//click function for Complaint email
    $("#complaintEmail").click(function(){
        let complaintForm   =   $("#complaintForm");
        let suggestionForm  =   $("#suggestionForm");
        let supportForm    =   $("#supportForm");
        let current         =   $(this);

        if(supportForm.hasClass('hide')){
            current.toggleClass('current');
        }
        else {
            current.toggleClass('current');
        }
        
        if(supportForm.hasClass('hide') && suggestionForm.hasClass('hide'))
        {
            complaintForm.toggleClass('hide');
        }
        else
        {
            supportForm.removeClass('hide').addClass('hide');
            suggestionForm.removeClass('hide').addClass('hide');
            complaintForm.toggleClass('hide');
        }
        
    });
    

    
    
    
//    
////Experimental code             !!!!NOT FUNCTIONING PROPERLY!!!!
//
//
//
//    //click function for support email
//    $("#supportEmail").click(function(){
//        let complaintForm   =   $("#complaintForm");
//        let suggestionForm  =   $("#suggestionForm");
//        let supportForm    =   $("#supportForm");
//        
//        //if the suggestion form & complaint form have class
//        //'scale-out' then execute this code
//        if (suggestionForm.hasClass('scale-out') && complaintForm.hasClass('scale-out'))
//        {
//            //
//            if (supportForm.hasClass('scale-out')) {
//                supportForm.removeClass('scale-out');
//            }
//            else {
//                supportForm.addClass('scale-out');
//            }
//        }
//        //else execute this code
//        else
//        {
//            suggestionForm.removeClass('scale-out').addClass('scale-out');
//            complaintForm.removeClass('scale-out').addClass('scale-out');
//            supportForm.removeClass('scale-out');
//        }
//    });
//

});