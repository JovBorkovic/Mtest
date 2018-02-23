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
    
});