$(document).ready( function(){
    
    
//click function for support email
    $("#supportEmail").click(function(){
        let complaintForm   =   $("#complaintForm");
        let suggestionForm  =   $("#suggestionForm");
        let supportForm    =   $("#supportForm");      
        
        if(suggestionForm.hasClass('hide') && complaintForm.hasClass('hide'))
        {
            supportForm.toggleClass('hide');
        }
        else
        {
            suggestionForm.removeClass('hide');
            complaintForm.removeClass('hide');
            suggestionForm.addClass('hide');
            complaintForm.addClass('hide');
            supportForm.toggleClass('hide');
        }
    });
    

//click function for suggestion email
    $("#suggestionEmail").click(function(){
        let complaintForm   =   $("#complaintForm");
        let suggestionForm  =   $("#suggestionForm");
        let supportForm    =   $("#supportForm");      
        
        if(supportForm.hasClass('hide') && complaintForm.hasClass('hide'))
        {
            suggestionForm.toggleClass('hide');
        }
        else
        {
            supportForm.removeClass('hide');
            complaintForm.removeClass('hide');
            supportForm.addClass('hide');
            complaintForm.addClass('hide');
            suggestionForm.toggleClass('hide');
        }
        
    });
    
    
//click function for Complaint email
    $("#complaintEmail").click(function(){
        let complaintForm   =   $("#complaintForm");
        let suggestionForm  =   $("#suggestionForm");
        let supportForm    =   $("#supportForm");      
        
        if(supportForm.hasClass('hide') && suggestionForm.hasClass('hide'))
        {
            complaintForm.toggleClass('hide');
        }
        else
        {
            supportForm.removeClass('hide');
            suggestionForm.removeClass('hide');
            supportForm.addClass('hide');
            suggestionForm.addClass('hide');
            complaintForm.toggleClass('hide');
        }
        
    });
    
});