$(document).ready( function() {

let burgerOpened = false;

function toggleMenu() {
    if(!burgerOpened) {
        burgerOpened = true;
      $('#compact-men').css('left','0');
        
        setTimeout(() => {
            $('.body-wrapper').css({
                'position':'fixed',
                'left':'250px'
            });
        } ,100);
        
    } else {
        burgerOpened = false;
        $('.body-wrapper').css({
            'position':'fixed',
            'left':'0'
        });
        
        setTimeout(() => {
            $('#compact-men').css('left','-100%');
        } ,100);
    }
}

   $('.burger').click(() => toggleMenu());

});