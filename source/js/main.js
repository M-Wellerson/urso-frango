window.onscroll = function() {
    if( window.scrollY > 3 ) {
        document.querySelector('.header').style.display = 'none';
    }else{
        document.querySelector('.header').style.display = 'grid';
    }
};

let darkmode = {
    '--primary-color' : { dark: '#222222', light: '#e3e0d7'},
    '--border-color'  : { dark: '#fff', light: '#161616' },
    '--grey'          : { dark:  '#fff', light: '#3b3b3b' },
    '--glass'         : { dark:  'hsla(0, 0%, 0%, 0.5)', light: 'hsla(0, 0%, 100%, 0.5)' },
    '--border-color'  : { dark:  '#fff', light: '#161616' },
};

const sunMoonContainer = document.querySelector('.sun-moon-container')

document.querySelector('.lamp_mode-color').addEventListener('click', () => {
    let darkModeSet = document.body.classList.toggle('dark');
    if(darkModeSet) {
        const currentRotation = parseInt(getComputedStyle(sunMoonContainer).getPropertyValue('--rotation'));
        sunMoonContainer.style.setProperty('--rotation', currentRotation + 180);
        
        Object.entries(darkmode).forEach(items => {
            document.documentElement.style.setProperty(items[0], items[1].dark);
        });
    }else{
        Object.entries(darkmode).forEach(items => {
            document.documentElement.style.setProperty(items[0], items[1].light);
        });
    }
})