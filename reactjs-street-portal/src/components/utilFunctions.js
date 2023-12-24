 

function BodyScrollToTop(){
    //below will set the view on top
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function SomeOtherLogic(){
    //below will set the view on top
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



module.exports = (BodyScrollToTop, SomeOtherLogic);