$(document).ready(function(){
    let isBarVisible = false;
  
    $('#btn').click(function(){
        if (isBarVisible) {
            $('#bar').animate({left: '-100%'});
        } else {
            $('#bar').animate({left: '0'});
        }
        isBarVisible = !isBarVisible;
    });
});