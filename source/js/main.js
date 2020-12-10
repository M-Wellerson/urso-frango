window.onscroll = function() {
    if( window.scrollY > 3 ) {
        document.querySelector('.menu').style.top = '-3px';
    }else{
        document.querySelector('.menu').style.top = '29px';
    }
};