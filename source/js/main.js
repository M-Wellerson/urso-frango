window.onscroll = function() {
    if( window.scrollY > 3 ) {
        document.querySelector('.header').style.display = 'none';
    }else{
        document.querySelector('.header').style.display = 'grid';
    }
};